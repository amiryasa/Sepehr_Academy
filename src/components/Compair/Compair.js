import React, { useContext, useEffect, useRef, useState } from "react";
import { CompairItem } from "../CompairItem/CompairItem";
import { GeneralContext } from "../../providers/GeneralContext";
import { getCourseById } from "../../api/Core/Course";
import { formatDate } from "../../constants/usefulFunc";
import { toast } from "react-toastify";
import { getItem } from "../../api/storage/storage";
import { getStudentById } from "../../api/Core/Student_Manage"
import "./Compair.css";

const Compair = () => {
  const { compairCourse, setShopCourse, shoppCourse, setCompairCourse, setConfirmPopupOpen, onConfirmSetter } = useContext(GeneralContext)
  const courseToCompair = useRef([])
  const [data, setData] = useState([])
  const listCompairer = useRef([]);
  const userId = JSON.parse(getItem('id'))
  const [oldData, setOldData] = useState([])


  useEffect(() => {
    if (compairCourse.length === 2) {
      compairCourse.map((item) => {
        getDetailCourse(item.id)
      })
    }
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setData(courseToCompair.current)
      if (courseToCompair.current.length > 1) {
        getCompairAllCourse();
        getOldCourse(userId);
      }
    }, 2000);

  }, [courseToCompair.current.length])

  const duringSeter = (item1, item2) => {

    var d = new Date(item1);
    let month01 = d.getMonth() + 1;

    var e = new Date(item2);
    let month02 = e.getMonth() + 1;


    return (month01 - month02);

  }


  const getDetailCourse = async (id) => {
    let response = await getCourseById(id);

    console.log('10 2 10 2', response);
    const currentData = {
      title: response.data.result.title,
      image: response.data.result.lesson.image,
      teacher: response.data.result.teacher.fullName,
      capacity: response.data.result.capacity,
      studentCount: response.data.result.students.length,
      cost: response.data.result.cost,
      start: formatDate(response.data.result.startDate),
      section: duringSeter(formatDate(response.data.result.endDate),formatDate(response.data.result.startDate)),
      id: response.data.result._id
    }
    if (courseToCompair.current.length != 2)
      courseToCompair.current.push(currentData)
  }

  const getOldCourse = async (userId) => {
    let response = await getStudentById(userId);
    if (response.data.result) {
      let holder = response.data.result.courses;
      setOldData(holder.map(item => item._id));
    }
  }

  const getCompairAllCourse = () => {

    if (courseToCompair.current[0].cost < courseToCompair.current[1].cost) {
      listCompairer.current['cost'] = 1;
    }
    else if (courseToCompair.current[0].cost > courseToCompair.current[1].cost) {
      listCompairer.current['cost'] = 2;
    }
    else {
      listCompairer.current['cost'] = 0;
    }

    if (courseToCompair.current[0].studentCount > courseToCompair.current[1].studentCount) {
      listCompairer.current['studentCount'] = 1;
    }
    else if (courseToCompair.current[0].studentCount < courseToCompair.current[1].studentCount) {
      listCompairer.current['studentCount'] = 2;
    }
    else {
      listCompairer.current['studentCount'] = 0;
    }

    if (courseToCompair.current[0].capacity > courseToCompair.current[1].capacity) {
      listCompairer.current['capacity'] = 1;
    }
    else if (courseToCompair.current[0].capacity < courseToCompair.current[1].capacity) {
      listCompairer.current['capacity'] = 2;
    }
    else {
      listCompairer.current['capacity'] = 0;
    }

    if (courseToCompair.current[0].start < courseToCompair.current[1].start) {
      listCompairer.current['start'] = 1;
    }
    else if (courseToCompair.current[0].start > courseToCompair.current[1].start) {
      listCompairer.current['start'] = 2;
    }
    else {
      listCompairer.current['start'] = 0;
    }

    if (courseToCompair.current[0].section > courseToCompair.current[1].section) {
      listCompairer.current['section'] = 2;
    }
    else if (courseToCompair.current[0].section < courseToCompair.current[1].section) {
      listCompairer.current['section'] = 1;
    }
    else {
      listCompairer.current['section'] = 0;
    }
  }

  const AddCourseToShop = (courseId) => {
    if (oldData && oldData.length > 0) {
      if (oldData.includes(courseId)) toast.error('این دوره قبلا خریده شده!');
      else {
        if (shoppCourse && shoppCourse.length > 0) {
          if (shoppCourse.includes(courseId)) toast.error('این دوره قبلا به سبد خرید اضافه شده است!');
          else {
            setShopCourse(current => [...current, courseId]);
            toast.success('دوره با موفقیت به سبد خرید اضافه شد!');
          }
        }
        else {
          setShopCourse(current => [...current, courseId]);
          toast.success('دوره با موفقیت به سبد خرید اضافه شد!');
        }
      }
    }
    else if (shoppCourse && shoppCourse.length > 0) {
      if (shoppCourse.includes(courseId)) toast.error('این دوره قبلا به سبد خرید اضافه شده است!');
      else {
        setShopCourse(current => [...current, courseId]);
        toast.success('دوره با موفقیت به سبد خرید اضافه شد!');
      }
    }
    else {
      setShopCourse(current => [...current, courseId]);
      toast.success('دوره با موفقیت به سبد خرید اضافه شد!');
    }
  }

  const removeCourseInCompair = (courseId) => {
    if (data.length === 1 && compairCourse.length === 1) { setData([]); setCompairCourse([]) }
    else {
      setCompairCourse(compairCourse.filter((item) => item.id != courseId))
      setData(data.filter((item) => item.id != courseId))
    }
  }

  return (
    <div>
      {(data && data.length != 0) ?
        <div className="CompairItemContainer">
          {data.map((item, key) => (
            <CompairItem
              key={item.id}
              couurseInfo={item}
              comperList={listCompairer.current}
              itemId={key + 1}
              AddCourseToShop={(courseId) => {
                onConfirmSetter('آیا برای اضافه کردم به سبد خرید مطمئن هستید؟',
                  () => { AddCourseToShop(courseId) }
                )
                setConfirmPopupOpen(true)
              }}
              removeCourseInCompair={(courseId) => {
                onConfirmSetter('آیا برای حذف مطمئن هستید؟',
                  () => { removeCourseInCompair(courseId) }
                )
                setConfirmPopupOpen(true)
              }} />
          ))}
        </div> : <div className="theBagIsEmpty"> دوره ای برای مقایسه انتخاب نشده است !</div>}
    </div>
  );
};

export { Compair };
