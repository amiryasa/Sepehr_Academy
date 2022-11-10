import { ADD_STUDENT_IN_COURSE, COUNT_LIKE_COURSE, DISLIKE_COURSE, GETALL_COURSES, GETALL_COURSES_BY_ID, LIKE_COURSE, PAGINATION_GETALL_COURSES, REMOVE_STUDENT_IN_COURSE, UPDATE_COURSE } from "../endpoints";
import api from "../interceptor";


export const getAllCourse = () => api.get(GETALL_COURSES)

export const getCoursePagination = payload =>
    api.get(PAGINATION_GETALL_COURSES(payload));

export const getCourseById = payload => api.get(GETALL_COURSES_BY_ID(payload))

export const addStudentToCourse = payload =>
    api.post(ADD_STUDENT_IN_COURSE(payload.userId), {
        courseId: payload.courseId
    })

export const removeStudentToCourse = payload =>
    api.post(REMOVE_STUDENT_IN_COURSE(payload.userId), { courseId: payload.courseId })

export const likeCourse = payload =>
    api.post(LIKE_COURSE, {
        courseId: payload.courseId,
        userId: payload.userId
    })

export const dislikeCourse = payload =>
    api.post(DISLIKE_COURSE, {
        courseId: payload.courseId,
        userId: payload.userId
    })

export const countLikeCourse = payload =>
    api.get(COUNT_LIKE_COURSE(payload))

export const updateCourse = payload =>
api.put(UPDATE_COURSE(payload.id), {
    title: payload.title,
    cost: payload.cost,
    endDate: payload.startDate,
    startDate: payload.endDate,
    capacity: payload.capacity,
    teacher: payload.teacher,
    lesson: payload.lesson
})