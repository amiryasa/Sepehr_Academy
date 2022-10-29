export const API = 'https://api.noorgon.sepehracademy.ir/api/';

//login register
export const REGISTER = `${API}auth/register`
export const LOGIN = `${API}auth/login`
export const FORGET_PASS = `${API}forgetpassword`
export const RESET_PASS = `${API}resetPassword`

//register employee
export const REGISTER_EMPLOYEE = `${API}auth/employee/register`
export const LOGIN_EMPLOYEE = `${API}auth/employee/login`

//student managment
export const GETALL_STUDENT = `${API}student/getall`
export const PAGINATION_GETALL_STUDENT = payload => `${API}student/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}`
export const GET_STUDENT_BY_ID = payload => `${API}student/${payload}`
export const UPDATE_STUDENT = payload => `${API}student/${payload}`
export const DELETE_STUDENT = `${API}student`
export const ACTIVE_STUDENT = `${API}student/active`
export const DEACTIVE_STUDENT = `${API}student/deactive`

//course
export const GETALL_COURSES = `${API}course/getall`
export const PAGINATION_GETALL_COURSES = payload => `${API}course/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}`
export const GETALL_COURSES_BY_ID = payload => `${API}course/${payload}`
export const CREATE_COURSE = `${API}course`
export const UPDATE_COURSE = `${API}course`
export const DELETE_COURSE = `${API}course`
export const ADD_STUDENT_IN_COURSE = payload => `${API}course/addStudentToCourse/${payload}`
export const REMOVE_STUDENT_IN_COURSE = payload => `${API}course/removeStudentFromCourse/${payload}`
export const LIKE_COURSE = `${API}course/like`
export const DISLIKE_COURSE = `${API}course/dislike`
export const COUNT_LIKE_COURSE = payload => `${API}course/likeCount/${payload}`

//lesson
export const GETALL_LESSONS = `${API}lesson`
export const GETALL_LESSON_BY_ID = payload => `${API}lesson/${payload}`
export const PAGINATION_GETALL_LESSONS = payload => `${API}lesson/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}`
export const GET_LESSON_FOR_COURSE_BY_ID = payload => `${API}lesson/course/${payload}`
export const ADD_LESSON = `${API}lesson/add`
export const UPDATE_LESSON = `${API}lesson`
export const DELETE_LESSON = `${API}lesson`

//news
export const GETALL_NEWS = `${API}news`
export const PAGINATION_GETALL_NEWS = payload => `${API}news/list?pagenumber=${payload.pageNumber}&pagesize=${payload.pageSize}&category=${payload.news}`
export const GET_TOP_NEWS = `${API}news/topNews`
export const GET_TOP_ARTICLES = `${API}news/topArticles`
export const GETALL_NEWS_BY_ID = payload => `${API}news/${payload}`
export const GET_CATEGORY = `${API}news/category`
export const ADD_NEWS = `${API}news`
export const UPDATE_NEWS_BY_ID = `${API}news`
export const DELETE_NEWS = `${API}news`

//contact us
export const CONTACT_US = `${API}contactUs`

//comment
export const GETALL_COMMENTS = `${API}comments`
export const SEND_NEW_COMMENT = `${API}comments/send`
export const VERIFY_COMMENT = `${API}comments/verify`
export const ANSWER_COMMENT = `${API}comments/answer`

//employee
export const ALL_TEACHER = `${API}employee/getallteachers`
export const LAST_TEACHERS = `${API}employee/getlastteachers`

export const GETALL_MAIN_CATEGORY = `${API}category/getall`
