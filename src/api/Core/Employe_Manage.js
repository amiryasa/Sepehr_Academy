import { ALL_TEACHER, LAST_TEACHERS } from "../endpoints";
import api from "../interceptor";

export const getAllTeachers = () => api.get(ALL_TEACHER)

export const getLastTeachers = () => api.get(LAST_TEACHERS)

export const getEmployeById = id => api.get(`https://api.noorgon.sepehracademy.ir/api/employee/${id}`)