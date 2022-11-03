import { useParams } from "react-router-dom";
import { DetailCourse } from "../../components/SingleCourse/DeatilsCourse/DetailCourse";
import { Comments } from "../../components/Comments/Comments";
import { CourseDetailClass } from "../../components/SingleCourse/CourseDetailClass/CourseDetailClass";
import { useContext, useEffect, useState } from "react";
import { getCourseById } from "../../api/Core/Course";
import { getStudentById } from "../../api/Core/Student_Manage";
import { getItem } from "../../api/storage/storage";
import { toast } from "react-toastify";
import { GeneralContext } from "../../providers/GeneralContext";

const CourseDetail = () => {
  const userId = JSON.parse(getItem('id'))
  const { id } = useParams();
  const [detailCourse, setDetailCourse] = useState()
  const [shoppingCourses, setShoppingCourses] = useState([])
  const { shoppCourse, setShopCourse } = useContext(GeneralContext)

  useEffect(() => {
    getDetailCourse(id)
    if (userId) {
      getMyCourse(userId)
    }
  }, [])

  const getDetailCourse = async (id) => {
    let response = await getCourseById(id);
    if (response.data.result) {
      setDetailCourse(response.data.result)
    }
  }

  const getMyCourse = async (userId) => {
    let response = await getStudentById(userId)
    let holder = response.data.result.courses;
    setShoppingCourses(holder.map(item => item._id));
  }

  const AddToShop = (courseId) => {
    if (shoppingCourses && shoppingCourses.length > 0) {
      if (shoppingCourses.includes(courseId)) toast.error('این دوره قبلا خریداری شده.');
      else {
        if (shoppCourse && shoppCourse.length > 0) {
          if (shoppCourse.includes(courseId)) toast.warning('این دوره در سبد خرید موجود است!')
          else {
            setShopCourse((current) => [...current, (courseId)]);
            toast.success('دوره به سبد خرید شما اضافه شد.')
          }
        }
        else {
          setShopCourse((current) => [...current, (courseId)]);
          toast.success('دوره به سبد خرید شما اضافه شد.')
        }
      }
    }
    else {
      if (shoppCourse && shoppCourse.length > 0) {
        if (shoppCourse.includes(courseId)) toast.warning('این دوره در سبد خرید موجود است!')
        else {
          setShopCourse((current) => [...current, (courseId)]);
          toast.success('دوره به سبد خرید شما اضافه شد.')
        }
      }
      else {
        setShopCourse((current) => [...current, (courseId)]);
        toast.success('دوره به سبد خرید شما اضافه شد.')
      }
    }
  }

  return (
    <>
      {detailCourse &&
        <>
          <CourseDetailClass
            deatilsCouse={detailCourse}
            detailTeacher={detailCourse.teacher}
            detailLesson={detailCourse.lesson}
            AddToShop={AddToShop} />
          <DetailCourse detailLesson={detailCourse.lesson} />
          <Comments postId={id} />
        </>
      }
    </>
  );
};
export { CourseDetail };
