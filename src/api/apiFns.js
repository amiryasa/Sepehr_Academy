//login register
export const REGISTER = "api/auth/register"
export const LOGIN = "api/auth/login"
export const FORGET_PASS = "api/forgetpassword"
export const RESET_PASS = "api/resetPassword"

//register employee
export const REGISTER_EMPLOYEE = "api/auth/employee/register"
export const LOGIN_EMPLOYEE = "api/auth/employee/login"

//student managment
export const GETALL_STUDENT = "api/student/getall"
export const PAGINATION_GETALL_STUDENT = "api/student/list"
export const GET_STUDENT_BY_ID = "api/student"
export const UPDATE_STUDENT = "api/student"
export const DELETE_STUDENT = "api/student"
export const ACTIVE_STUDENT = "api/student/active"
export const DEACTIVE_STUDENT = "api/student/deactive"

//course
export const GETALL_COURSES = "api/course/getall"
export const PAGINATION_GETALL_COURSES = "api/course/list"
export const GETALL_COURSES_BY_ID = "api/course"
export const CREATE_COURSE = "api/course"
export const UPDATE_COURSE = "api/course"
export const DELETE_COURSE = "api/course"
export const ADD_STUDENT_IN_COURSE = "api/course/addStudentToCourse"
export const REMOVE_STUDENT_IN_COURSE = "api/course/removeStudentFromCourse"
export const LIKE_COURSE = "api/course/like"
export const DISLIKE_COURSE = "api/course/dislike"
export const COUNT_LIKE_COURSE = "api/course/likeCount"

//lesson
export const GETALL_LESSONS = "api/lesson"
export const GETALL_LESSON_BY_ID = "api/lesson"
export const PAGINATION_GETALL_LESSONS = "api/lesson/list"
export const GET_LESSON_FOR_COURSE_BY_ID = "api/lesson/course"
export const ADD_LESSON = "api/lesson/add"
export const UPDATE_LESSON = "api/lesson"
export const DELETE_LESSON = "api/lesson"

//news
export const GETALL_NEWS = "api/news"
export const PAGINATION_GETALL_NEWS = "api/news/list"
export const GET_TOP_NEWS = "api/news/topNews"
export const GET_TOP_ARTICLES = "api/news/topArticles"
export const GETALL_NEWS_BY_ID = "api/news"
export const GET_CATEGORY = "api/news/category"
export const ADD_NEWS = "api/news"
export const UPDATE_NEWS_BY_ID = "api/news"
export const DELETE_NEWS = "api/news"

//contact us
export const CONTACT_US = "api/contactUs"

//comment
export const GETALL_COMMENTS = "api/comments"
export const SEND_NEW_COMMENT = "api/comments/send"
export const VERIFY_COMMENT = "api/comments/verify"
export const ANSWER_COMMENT = "api/comments/answer"








