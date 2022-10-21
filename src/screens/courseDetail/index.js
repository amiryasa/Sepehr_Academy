import { useParams } from "react-router-dom";
import { DetailCourse } from "../../components/SingleCourse/DeatilsCourse/DetailCourse";
import { Comments } from "../../components/Comments/Comments";
import { CourseDetailClass } from "../../components/SingleCourse/CourseDetailClass/CourseDetailClass";
import { useEffect, useState } from "react";
import { getCourseById } from "../../api/Core/Course";

const CourseDetail = () => {
  const { id } = useParams();
  const [detailCourse, setDetailCourse] = useState()

  const comments = [
    {
      name: "mohamad",
      date: "25 اردیبهشت 1401",
      describe:
        "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ",
    },
    {
      name: "amir",
      date: "25 مهر 1401",
      describe:
        "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ",
      idParent: true,
    },
    {
      name: "jafar",
      date: "25 مهر 1401",
      describe:
        "توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ",
      idParent: true,
    },
    {
      name: "amir hosein",
      date: "25 اردیبهشت 1401",
      describe:
        "توضیحات توضیحات توضیحات  توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات توضیحات ",
    },
  ];

  useEffect(() => {
    getDetailCourse(id)
  }, [])

  const getDetailCourse = async (id) => {
    let response = await getCourseById(id);
    if (response.data.result) {
      setDetailCourse(response.data.result)
    }
  }


  return (
    <>
      {detailCourse &&
        <>
          <CourseDetailClass
            deatilsCouse={detailCourse}
            detailTeacher={detailCourse.teacher}
            detailLesson={detailCourse.lesson} />
          <DetailCourse detailLesson={detailCourse.lesson} />
          <Comments comments={comments} />
        </>
      }
    </>
  );
};
export { CourseDetail };
