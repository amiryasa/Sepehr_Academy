import { useParams } from "react-router-dom";
import { DetailCourse } from "../../components/SingleCourse/DeatilsCourse/DetailCourse";
import { Comments } from "../../components/Comments/Comments";
import { CourseDetailClass } from "../../components/SingleCourse/CourseDetailClass/CourseDetailClass";
import { useContext, useEffect, useState } from "react";
import { countLikeCourse, dislikeCourse, getCourseById, likeCourse, removeStudentToCourse } from "../../api/Core/Course";
import { getStudentById } from "../../api/Core/Student_Manage";
import { getItem } from "../../api/storage/storage";
import { toast } from "react-toastify";
import { GeneralContext } from "../../providers/GeneralContext";
import { trackPromise } from "react-promise-tracker";
import { CommentsCour } from "../../components/CommentsCour/CommentsCour";

const CourseDetail = () => {
  const userId = JSON.parse(getItem('id'))
  const role = getItem('role');

  const { id } = useParams();
  const [detailCourse, setDetailCourse] = useState()
  const [shoppingCourses, setShoppingCourses] = useState([])
  const { shoppCourse, setShopCourse } = useContext(GeneralContext)
  const [countLike, setCountLike] = useState(0)
  const [countDislike, setCountDislike] = useState(0)
  const [likeCourses, setLikeCourse] = useState(false)
  const [disLikeCourses, setDisLikeCourse] = useState(false)

  useEffect(() => {
    trackPromise(getCountLike(id));
    trackPromise(getDetailCourse(id))
    if (userId && role === 'student') {
      trackPromise(getMyCourse(userId))
    }
  }, [])

  const duringSeter = (item1, item2) => {

    var d = new Date(item1);
    let month01 = d.getMonth() + 1;

    var e = new Date(item2);
    let month02 = e.getMonth() + 1;


    return (month01 - month02);

  }

  const getDetailCourse = async (id) => {
    let response = await getCourseById(id);
    if (response.data.result) {
      setDetailCourse(response.data.result);
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

  const AddToShop = async (courseId) => {
    if (shoppingCourses && shoppingCourses.length > 0) {
      if (shoppingCourses.includes(courseId)) {
        const sendRequest = await removeStudentToCourse({
          userId: userId,
          courseId: courseId
        })

        const newResult = shoppingCourses.filter(item => {
          return (item != courseId)
        })
        setShoppingCourses([...newResult])
        toast.success('دوره با موفقیت حذف شد.');
      }
      else {
        if (shoppCourse && shoppCourse.length > 0) {
          if (shoppCourse.includes(courseId)) {
            const newResult2 = shoppCourse.filter(item => {
              return (item != courseId)
            })

            setShopCourse([...newResult2]);

            toast.success('دوره با موفقیت حذف شد.');
          }
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

  if (shoppingCourses) {
    console.log('%%%', shoppingCourses)
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
            actionLike={() => {
              trackPromise(actionLike())
            }}
            actionDislike={() => {
              trackPromise(actionDislike())
            }}
            during={duringSeter(detailCourse.endDate, detailCourse.startDate)}
            countLike={countLike}
            countDislike={countDislike}
            likeCourses={likeCourses}
            disLikeCourses={disLikeCourses}
            btnCon={shoppingCourses}
          />
          <DetailCourse detailLesson={detailCourse.lesson} />
          <CommentsCour postId={id} student={detailCourse.students} />
        </>
      }
    </>
  );
};
export { CourseDetail };
