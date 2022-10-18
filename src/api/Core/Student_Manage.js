import { GETALL_STUDENT, GET_STUDENT_BY_ID, PAGINATION_GETALL_STUDENT, UPDATE_STUDENT } from "../endpoints";
import api from "../interceptor";

export const getAllStudet = () => api.get(GETALL_STUDENT)

export const getStudentPagination = payload =>
    api.get(PAGINATION_GETALL_STUDENT(payload));

export const getStudentById = payload => api.get(GET_STUDENT_BY_ID(payload))

export const updateStudetInform = payload =>
    api.put(UPDATE_STUDENT(payload.id), {
        fullName: payload.fullName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        birthDate: payload.birthDate,
        nationalId: payload.nationalId,
        profile: payload.profile
    })



