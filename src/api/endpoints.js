export const API = 'https://academy-sepehr.iran.liara.run/api/';

//login register
export const REGISTER = "auth/register"
export const LOGIN = "auth/login"
export const FORGET_PASS = "forgetpassword"
export const RESET_PASS = "resetPassword"

//register employee
export const REGISTER_EMPLOYEE = "auth/employee/register"
export const LOGIN_EMPLOYEE = "auth/employee/login"

//student managment
export const GETALL_STUDENT = "student/getall"
export const PAGINATION_GETALL_STUDENT = payload => `student/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}`
export const GET_STUDENT_BY_ID = payload => `student/${payload}`
export const UPDATE_STUDENT = payload => `student/${payload}`
export const DELETE_STUDENT = "student"
export const ACTIVE_STUDENT = "student/active"
export const DEACTIVE_STUDENT = "student/deactive"

//course
export const GETALL_COURSES = "course/getall"
export const PAGINATION_GETALL_COURSES = payload => `course/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}`
export const GETALL_COURSES_BY_ID = payload => `course/${payload}`
export const CREATE_COURSE = "course"
export const UPDATE_COURSE = "course"
export const DELETE_COURSE = "course"
export const ADD_STUDENT_IN_COURSE = payload => `course/addStudentToCourse/${payload}`
export const REMOVE_STUDENT_IN_COURSE = payload => `course/removeStudentFromCourse/${payload}`
export const LIKE_COURSE = "course/like"
export const DISLIKE_COURSE = "course/dislike"
export const COUNT_LIKE_COURSE = payload => `course/likeCount/${payload}`

//lesson
export const GETALL_LESSONS = "lesson"
export const GETALL_LESSON_BY_ID = payload => `lesson/${payload}`
export const PAGINATION_GETALL_LESSONS = payload => `lesson/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}`
export const GET_LESSON_FOR_COURSE_BY_ID = payload => `lesson/course/${payload}`
export const ADD_LESSON = "lesson/add"
export const UPDATE_LESSON = "lesson"
export const DELETE_LESSON = "lesson"

//news
export const GETALL_NEWS = "news"
export const PAGINATION_GETALL_NEWS = payload => `news/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}&category=${payload.news}`
export const GET_TOP_NEWS = "news/topNews"
export const GET_TOP_ARTICLES = "news/topArticles"
export const GETALL_NEWS_BY_ID = payload => `news/${payload}`
export const GET_CATEGORY = "news/category"
export const ADD_NEWS = "news"
export const UPDATE_NEWS_BY_ID = "news"
export const DELETE_NEWS = "news"

//contact us
export const CONTACT_US = "contactUs"

//comment
export const GETALL_COMMENTS = "comments"
export const SEND_NEW_COMMENT = "comments/send"
export const VERIFY_COMMENT = "comments/verify"
export const ANSWER_COMMENT = "comments/answer"

export const GETALL_MAIN_CATEGORY = "category/getall"








