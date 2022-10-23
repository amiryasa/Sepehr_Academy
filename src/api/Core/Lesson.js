import { GETALL_LESSONS, GETALL_LESSON_BY_ID, GETALL_MAIN_CATEGORY, GET_LESSON_FOR_COURSE_BY_ID, PAGINATION_GETALL_LESSONS } from "../endpoints";
import api from "../interceptor";

export const getAllLesson = () => api.get(GETALL_LESSONS)

export const getLessonById = payload => api.get(GETALL_LESSON_BY_ID(payload))

export const lessonByPagination = payload => api.get(PAGINATION_GETALL_LESSONS(payload))

export const getLessonForCourseById = payload => api.get(GET_LESSON_FOR_COURSE_BY_ID(payload))

export const getAllCategory = () => api.get(GETALL_MAIN_CATEGORY)