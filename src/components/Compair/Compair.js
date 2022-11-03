import React, { useContext, useEffect, useRef, useState } from "react";

import "./Compair.css";

import cour03 from "./../../assets/images/Courses/react.png";
import cour02 from './../../assets/images/Courses/html.png';

import { CompairItem } from "../CompairItem/CompairItem";
import { GeneralContext } from "../../providers/GeneralContext";
import { getCourseById } from "../../api/Core/Course";
import { formatDate } from "../../constants/usefulFunc";

const compairData = [
  {
    title: " دوره آموزش جامع React native",
    image: cour03,
    teacher: "محمد بحرالعلوم",
    capacity: 40,
    studentCount: 10,
    rate: 4.5,
    cost: "000 350 ت",
    start: '1401/08/12',
    section: '6:30 (17 ویدئو)'
  },

  {
    title: "دوره آموزش جامع Html & Css",
    image: cour02,
    teacher: "محمد بحرالعلوم",
    capacity: 40,
    studentCount: 15,
    rate: 4.7,
    cost: "000 150 ت",
    start: '1401/05/23',
    section: '5:30 (25 ویدئو)'
  },
];

const Compair = () => {
  const { compairCourse } = useContext(GeneralContext)
  const courseToCompair = useRef([])
  const [data, setData] = useState([])
  const listCompairer = useRef([]);

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
        getCompairAllCourse()
      }
    }, 2000);

  }, [courseToCompair.current.length])


  const getDetailCourse = async (id) => {
    let response = await getCourseById(id);
    const currentData = {
      title: response.data.result.title,
      image: response.data.result.lesson.image,
      teacher: response.data.result.teacher.fullName,
      capacity: response.data.result.capacity,
      studentCount: response.data.result.students.length,
      rate: 4.2,
      cost: response.data.result.cost,
      start: formatDate(response.data.result.startDate),
      section: '5:30 (25 ویدئو)'
    }
    if (courseToCompair.current.length != 2)
      courseToCompair.current.push(currentData)
  }

  const getCompairAllCourse = () => {
    if (courseToCompair.current[0].rate > courseToCompair.current[1].rate) {
      listCompairer.current['rate'] = 1;
    }
    else if (courseToCompair.current[0].rate < courseToCompair.current[1].rate) {
      listCompairer.current['rate'] = 2;
    }
    else {
      listCompairer.current['rate'] = 0;
    }

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
      listCompairer.current['section'] = 1;
    }
    else if (courseToCompair.current[0].section < courseToCompair.current[1].section) {
      listCompairer.current['section'] = 2;
    }
    else {
      listCompairer.current['section'] = 0;
    }
  }

  return (
    <div>
      {(data && data.length > 1) ?
        <div className="CompairItemContainer">
          <CompairItem couurseInfo={courseToCompair.current[0]} comperList={listCompairer.current} itemId={1} />
          <CompairItem couurseInfo={courseToCompair.current[1]} comperList={listCompairer.current} itemId={2} />
        </div> : <div> دوره ای برای مقایسه انتخاب نشده است </div>}
    </div>
  );
};

export { Compair };
