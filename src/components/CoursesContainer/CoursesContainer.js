import * as React from "react";
import _ from "lodash";
import { useState, useEffect } from "react";
import { CardInCourses } from "../CardInCourses/CardInCourses";
import { Paginate } from "../common/Pagination/Paginate";
import { CoursesFilter } from "../CoursesFilter/CoursesFilter";
import * as fa from "../../constants/persianStrings";
import { countLikeCourse, getAllCourse } from "../../api/Core/Course";
import "./CoursesContainer.css";
import { trackPromise } from "react-promise-tracker";

import PopUp from "../common/PopUp/PopUp";
import Box from '@mui/material/Box';
import { Input } from "../common/Input/Input";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";

const CoursesContainer = (props) => {
  const [originalCoursesData, setOriginalCoursesData] = useState(null);
  const [rightCoursesData, setRightCoursesData] = useState(null);
  const [rightCoursesData01, setRightCoursesData01] = useState(null);
  const [categoryName, setCategoryName] = React.useState([]);
  const [currentPage_CoursesContainer, setCurrentPage_CoursesContainer] = useState(1);
  const [coursesCurrentData, setCoursesCurrentData] = useState("title");
  const [valueOf2step01, setValueOf2step01] = React.useState([0, 950]);
  const [valueOf2step02, setValueOf2step02] = React.useState([0, 5]);
  const [valueOf2step03, setValueOf2step03] = React.useState([10, 95]);
  const [teacherName, setTeacherName] = React.useState([]);
  const [costName, setCostName] = React.useState([]);
  const [sortby, setSortby] = React.useState([]);
  const [upOrDown, setUpOrDown] = React.useState([]);
  const [upOrDownData, setupOrDownData] = useState("desc");

  const [openPopUp, setOpenPopUp] = useState(false)
  const [search, setSearch] = useState();
  const [isTouch, setIsTouch] = useState(false)
  const [courseData, setCoursesData] = useState();
  const [searchResult, setSearchResult] = useState()
  const navigator = useNavigate();


  let allCost = ["رایگان", "خریدنی"];
  const sortbyItem = ["عنوان", "امتیاز", "قیمت", "ظرفیت", "مدرس دوره"];
  const upOrDownItem = ["صعودی", "نزولی"];

  useEffect(() => {
    trackPromise(getAllCourses());
    trackPromise(getCourses());
  }, []);

  // مرتب سازی 

  let allCount;
  if (rightCoursesData) {
    allCount = rightCoursesData.map((a) => a.cost);
    allCount.sort();
  }


  let allRate;
  if (rightCoursesData) {
    allRate = rightCoursesData.map((a) => a.rate);
    allRate.sort();
  }


  let allCapacity;
  if (rightCoursesData) {
    allCapacity = rightCoursesData.map((a) => a.studentCount);
    allCapacity.sort();
  }


  let allTeacher;
  if (rightCoursesData) {
    allTeacher = rightCoursesData.map((a) => a.teacher);
    allTeacher = [...new Set(allTeacher)];
  }


  let allCategory;
  if (rightCoursesData) {
    allCategory = rightCoursesData.map((a) => a.category);
    allCategory = [...new Set(allCategory)];
  }


  const getAllCourses = async () => {
    let response = await getAllCourse();
    if (response.data.result) {
      setOriginalCoursesData(response.data.result);

      let rightData = response.data.result.map((item, index) => ({
        image: item.lesson.image,
        title: item.title,
        teacher: item.teacher.fullName,
        studentCount: item.capacity,
        rate: props.likeDats[index],
        cost: item.cost,
        id: item._id,
        category: item.lesson.topics[0],
      }));

      setRightCoursesData([...rightData]);
      setRightCoursesData01([...rightData]);
    }
  };


  // pagination


  const handlePagination_CoursesContainer = (e, value) => {
    setCurrentPage_CoursesContainer(value);
  };

  // *
  // *
  // *
  // *
  // *

  //Main filter

  // *
  // *
  // *
  // *
  // *

  //Filtering sortby

  const handleSelectboxSortby = (event) => {
    const {
      target: { value },
    } = event;
    setSortby(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    if (event.target.value === "عنوان") {
      var movieOriginal = _.orderBy(rightCoursesData01, ["title"], [upOrDownData]);
      setRightCoursesData01([...movieOriginal]);
      setCoursesCurrentData("title");
    } else if (event.target.value === "امتیاز") {
      var movieOriginal = _.orderBy(rightCoursesData01, ["rate"], [upOrDownData]);
      setRightCoursesData01([...movieOriginal]);
      setCoursesCurrentData("rate");
    } else if (event.target.value === "قیمت") {
      var movieOriginal = _.orderBy(rightCoursesData01, ["cost"], [upOrDownData]);
      setRightCoursesData01([...movieOriginal]);
      setCoursesCurrentData("cost");
    } else if (event.target.value === "ظرفیت") {
      var movieOriginal = _.orderBy(
        rightCoursesData01,
        ["studentCount"],
        [upOrDownData]
      );
      setRightCoursesData01([...movieOriginal]);
      setCoursesCurrentData("studentCount");
    } else if (event.target.value === "مدرس دوره") {
      var movieOriginal = _.orderBy(rightCoursesData01, ["teacher"], [upOrDownData]);
      setRightCoursesData01([...movieOriginal]);
      setCoursesCurrentData("teacher");
    }
  };

  // *
  // *
  // *
  // *
  // *

  //Filtering up/down


  const handleSelectboxUpOrDown = (event) => {
    const {
      target: { value },
    } = event;
    setUpOrDown(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    if (event.target.value === "صعودی") {
      setupOrDownData("asc");
      var movieOriginal = _.orderBy(rightCoursesData01, [coursesCurrentData], ["asc"]);
      setRightCoursesData01([...movieOriginal]);
    } else if (event.target.value === "نزولی") {
      setupOrDownData("desc");
      var movieOriginal = _.orderBy(
        rightCoursesData01,
        [coursesCurrentData],
        ["desc"]
      );
      setRightCoursesData01([...movieOriginal]);
    }
  };

  // *
  // *
  // *
  // *
  // *







  //01
  const handleProgress2step01 = (event, newValue) => {

    let newData;

    if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && teacherName.includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && teacherName.includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && teacherName.includes(item.teacher)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost === 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost > 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        || (costName).length < 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= newValue[0] && item.cost / 1000 <= newValue[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
      );
    }

    setValueOf2step01(newValue);
    setRightCoursesData01([...newData]);
  };



  //02
  const handleProgress2step02 = (event, newValue) => {

    let newData;

    if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && teacherName.includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && teacherName.includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && teacherName.includes(item.teacher)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost === 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost > 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        || (costName).length < 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= newValue[0] && item.rate <= newValue[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
      );
    }

    setValueOf2step02(newValue);
    setRightCoursesData01([...newData]);
  };



  //03
  const handleProgress2step03 = (event, newValue) => {

    let newData;

    if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (categoryName).includes(item.category)
        && (event.target.value).includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (categoryName).includes(item.category)
        && teacherName.includes(item.teacher)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && teacherName.includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && teacherName.includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length > 0 && categoryName.length === 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && teacherName.includes(item.teacher)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (categoryName).includes(item.category)
        && (item.cost === 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (categoryName).includes(item.category)
        && (item.cost > 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (categoryName).includes(item.category)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (item.cost === 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
        && (item.cost > 0)
      );
    }

    else if (teacherName.length === 0 && categoryName.length === 0
      && ((costName).length > 0
        || (costName).length < 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= newValue[0] && item.studentCount <= newValue[1])
      );
    }

    setValueOf2step03(newValue);
    setRightCoursesData01([...newData]);
  };



  //Teacher selection
  const handleSelection = (event) => {

    const {
      target: { value },
    } = event;
    setTeacherName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    let newData;


    if ((event.target.value).length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (event.target.value).includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if ((event.target.value).length > 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (event.target.value).includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if ((event.target.value).length > 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (event.target.value).includes(item.teacher)
      );
    }

    else if ((event.target.value).length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if ((event.target.value).length > 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if ((event.target.value).length > 0 && categoryName.length === 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.teacher)
      );
    }

    else if ((event.target.value).length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost === 0)
      );
    }

    else if ((event.target.value).length === 0 && categoryName.length > 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost > 0)
      );
    }

    else if ((event.target.value).length === 0 && categoryName.length > 0
      && ((costName).length === 0
        || (costName).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
      );
    }

    else if ((event.target.value).length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost === 0)
      );
    }

    else if ((event.target.value).length === 0 && categoryName.length === 0
      && ((costName).length > 0
        && (costName).length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost > 0)
      );
    }

    else if ((event.target.value).length === 0 && categoryName.length === 0
      && ((costName).length > 0
        || (costName).length < 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
      );
    }

    setRightCoursesData01([...newData]);

  };


  //Teacher selection
  const handleSelection01 = (event) => {

    const {
      target: { value },
    } = event;
    setCostName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    let newData;

    if ((teacherName).length > 0 && categoryName.length > 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (teacherName).includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length > 0 && categoryName.length > 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (teacherName).includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length > 0 && categoryName.length > 0
      && ((event.target.value).length === 0
        || (event.target.value).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (teacherName).includes(item.teacher)
      );
    }

    else if ((teacherName).length > 0 && categoryName.length === 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (teacherName).includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length > 0 && categoryName.length === 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (teacherName).includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length > 0 && categoryName.length === 0
      && ((event.target.value).length === 0
        || (event.target.value).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (teacherName).includes(item.teacher)
      );
    }

    else if ((teacherName).length === 0 && categoryName.length > 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length === 0 && categoryName.length > 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length === 0 && categoryName.length > 0
      && ((event.target.value).length === 0
        || (event.target.value).length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (categoryName).includes(item.category)
      );
    }

    else if ((teacherName).length === 0 && categoryName.length === 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length === 0 && categoryName.length === 0
      && ((event.target.value).length > 0
        && (event.target.value).length < 2
        && event.target.value[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length === 0 && categoryName.length === 0
      && ((event.target.value).length > 0
        || (event.target.value).length < 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
      );
    }

    setRightCoursesData01([...newData]);

  };


  const handleSelection02 = (event) => {

    const {
      target: { value },
    } = event;
    setCategoryName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );

    let newData;

    if ((teacherName).length > 0 && (event.target.value).length > 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.category)
        && (teacherName).includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length > 0 && (event.target.value).length > 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.category)
        && (teacherName).includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length > 0 && (event.target.value).length > 0
      && (costName.length === 0
        || costName.length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.category)
        && (teacherName).includes(item.teacher)
      );
    }

    else if ((teacherName).length > 0 && (event.target.value).length === 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (teacherName).includes(item.teacher)
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length > 0 && (event.target.value).length === 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (teacherName).includes(item.teacher)
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length > 0 && (event.target.value).length === 0
      && (costName.length === 0
        || costName.length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (teacherName).includes(item.teacher)
      );
    }

    else if ((teacherName).length === 0 && (event.target.value).length > 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.category)
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length === 0 && (event.target.value).length > 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.category)
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length === 0 && (event.target.value).length > 0
      && (costName.length === 0
        || costName.length === 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (event.target.value).includes(item.category)
      );
    }

    else if ((teacherName).length === 0 && (event.target.value).length === 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'رایگان')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost === 0)
      );
    }

    else if ((teacherName).length === 0 && (event.target.value).length === 0
      && (costName.length > 0
        && costName.length < 2
        && costName[0] === 'خریدنی')) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
        && (item.cost > 0)
      );
    }

    else if ((teacherName).length === 0 && (event.target.value).length === 0
      && (costName.length > 0
        || costName.length < 2)) {
      newData = rightCoursesData && rightCoursesData.filter(item =>
        (item.cost / 1000 >= valueOf2step01[0] && item.cost / 1000 <= valueOf2step01[1])
        && (item.rate >= valueOf2step02[0] && item.rate <= valueOf2step02[1])
        && (item.studentCount >= valueOf2step03[0] && item.studentCount <= valueOf2step03[1])
      );
    }

    setRightCoursesData01([...newData]);

  };





  const getCourses = async() => {
    let response = await getAllCourse();

    let rightData = response.data.result.map((item) => ({
        image: item.lesson.image,
        title: item.title,
        topics: item.lesson.topics,
        id: item._id,
    }));

    setCoursesData(rightData);

    console.log('first', rightData);
  }

  const isResult = (items, token) => {
    let result = 0;
      if(_.startsWith(items, token)){
        result= result + 1;
      }
        return result;
  }

  const searchHandler = (even) => {

    const result = courseData.filter((item) => {
        return (isResult(item.title, even.target.value) === 1)
    })

    setSearchResult(result);


    setIsTouch(true);

  }




  return (
    <div className="dfghjhjg">
      <div className="homeH2 c21">
        <h2> {fa.TITLE_COURSES} </h2>
        <div className="CoursesSearchIcon" onClick={() => setOpenPopUp(true)}></div>
      </div>

      <CoursesFilter
        handleSelectboxSortby={handleSelectboxSortby}
        selectStateSortby={sortby}
        sortbyItem={sortbyItem}
        sortbyTitle={"مرتب‌سازی"}
        handleSelectboxUpOrDown={handleSelectboxUpOrDown}
        selectStateUpOrDown={upOrDown}
        upOrDownItem={upOrDownItem}
        upOrDownTitle={"روند نمایش"}


        minCount01={allCount ? allCount[0] / 1000 : 100}
        maxCount01={allCount ? allCount[(allCount.length) - 1] / 1000 : 950}
        step01={50}
        handleProgress2step01={handleProgress2step01}
        valueOf2step01={valueOf2step01}
        titleOf2step01={'محدوده قیمت'}

        minCount02={allRate ? allRate[0] : 0}
        maxCount02={allRate ? allRate[(allRate.length) - 1] : 5}
        step02={.1}
        handleProgress2step02={handleProgress2step02}
        valueOf2step02={valueOf2step02}
        titleOf2step02={'محدوده امتیاز'}

        minCount03={allCapacity ? allCapacity[0] : 10}
        maxCount03={allCapacity ? allCapacity[(allCapacity.length) - 1] : 95}
        step03={1}
        handleProgress2step03={handleProgress2step03}
        valueOf2step03={valueOf2step03}
        titleOf2step03={'محدوده ظرفیت'}



        listOfTeacher={allTeacher ? allTeacher : []}
        handleSelection={handleSelection}
        teacherState={teacherName}
        selectionTitle01={"مدرس دوره"}

        listOfCost={allCost}
        handleSelection01={handleSelection01}
        costState={costName}
        selectionTitle02={"نوع دوره"}

        listOfCategory={allCategory ? allCategory : []}
        handleSelection02={handleSelection02}
        categoryState={categoryName}
        selectionTitle03={"دسته‌بندی‌"}
      />

      <div className="CardIncoursesContainer">
        {rightCoursesData01 != null && rightCoursesData01
          .slice(currentPage_CoursesContainer * 4 - 4, currentPage_CoursesContainer * 4)
          .map((item, index) => (
            <CardInCourses
              image={item.image}
              bgColor={index % 2 ? "#F3FFF8" : "#F5FCFF"}
              btnColor="detail"
              title={item.title}
              teacher={item.teacher}
              studentCount={item.studentCount}
              rate={item.rate}
              cost={item.cost}
              id={item.id}
            />
          ))}
      </div>
      <Paginate
        allItem={rightCoursesData01 && rightCoursesData01.length}
        eachPageTtem={4}
        handlePagination={handlePagination_CoursesContainer}
      />

      {openPopUp &&
        <PopUp
            handleClose={() => { setOpenPopUp(false) }}
            open={openPopUp}
            className='popUpSearch'
            closeBtn
            title="به دنبال چه دوره‌ای هستید؟">
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <Input title="جستجو" value={search} onChange={(event) => searchHandler(event)} variant="standard" />
            </Box>
            <div className="searchResultHolder">

                {searchResult ? searchResult.map((item,key) => (
                    <div className="searchResultItem" onClick={() => {navigator(`/courseDetail/${item.id}`)}}> <img src={item.image} alt=""/> <p> {item.title} </p></div>
                )) : '' }

                {isTouch && searchResult.length === 0 ? <p className="noResultInSearch"> دوره‌ای یافت نشد!</p> : '' }

            </div>
        </PopUp>}

    </div>
  );
};

export { CoursesContainer };
