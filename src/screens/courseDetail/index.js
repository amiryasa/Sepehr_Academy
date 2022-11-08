import { useParams } from "react-router-dom";
import { DetailCourse } from "../../components/SingleCourse/DeatilsCourse/DetailCourse";
import { Comments } from "../../components/Comments/Comments";
import { CourseDetailClass } from "../../components/SingleCourse/CourseDetailClass/CourseDetailClass";
import { useContext, useEffect, useState } from "react";
import { countLikeCourse, dislikeCourse, getCourseById, likeCourse } from "../../api/Core/Course";
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
  const [countLike, setCountLike] = useState(0)
  const [countDislike, setCountDislike] = useState(0)
  const [likeCourses, setLikeCourse] = useState(false)
  const [disLikeCourses, setDisLikeCourse] = useState(false)

  useEffect(() => {
    getCountLike(id);
    getDetailCourse(id)
    if (userId) {
      getMyCourse(userId)
    }
  }, [])

  const duringSeter = (item1,item2) =>{

    var d = new Date(item1);
    let month01 = d.getMonth() + 1;

    var e = new Date(item2);
    let month02 = e.getMonth() + 1;


    return (month01-month02);

  }

  const getDetailCourse = async (id) => {
    let response = await getCourseById(id);
    if (response.data.result) {
      setDetailCourse(response.data.result);
      console.log('first', response.data.result)
    }
  }

  const getMyCourse = async (userId) => {
    let response = await getStudentById(userId)
    let holder = response.data.result.courses;
    setShoppingCourses(holder.map(item => item._id));
  }

  const getCountLike = async (id) => {
    let response = await countLikeCourse(id);
    if (response.data.result) {
      setCountLike(response.data.result.like)
      setCountDislike(response.data.result.dislike)
    }
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

  const actionLike = async () => {
    if (userId) {
      const payload = {
        courseId: id,
        userId
      }
      let response = await likeCourse(payload);
      if (response.data.result) {
        getCountLike(id);
        setLikeCourse(true);
        setDisLikeCourse(false);
        toast.success('با موفقیت ثبت شد')
      }
      else if (response.data.message) {
        toast.warning(response.data.message[0].message)
      }
    } else toast.error('ابتدا وارد شوید تا بتوانید نظر خودرا ثبت کنید')

  }

  const actionDislike = async () => {
    if (userId) {
      const payload = {
        courseId: id,
        userId
      }
      let response = await dislikeCourse(payload);
      if (response.data.result) {
        getCountLike(id);
        setDisLikeCourse(true);
        setLikeCourse(false);
        toast.success('با موفقیت ثبت شد.')
      }
      else if (response.data.message) {
        toast.warning(response.data.message[0].message)
      }
    }
    else toast.error('ابتدا وارد شوید تا بتوانید نظر خودرا ثبت کنید')

  }

  return (
    <>
      {detailCourse &&
        <>
          <CourseDetailClass
            deatilsCouse={detailCourse}
            detailTeacher={detailCourse.teacher}
            detailLesson={detailCourse.lesson}
            AddToShop={AddToShop}
            actionLike={actionLike}
            actionDislike={actionDislike}
            during={duringSeter(detailCourse.startDate, detailCourse.endDate)}
            countLike={countLike}
            countDislike={countDislike}
            likeCourses={likeCourses}
            disLikeCourses={disLikeCourses} />
          <DetailCourse detailLesson={detailCourse.lesson} />
          <Comments postId={id} />
        </>
      }
    </>
  );
};
export { CourseDetail };
