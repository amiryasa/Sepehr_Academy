import { GETALL_NEWS, GETALL_NEWS_BY_ID, GET_TOP_ARTICLES, GET_TOP_NEWS, PAGINATION_GETALL_NEWS } from "../endpoints";
import api from "../interceptor";

export const getAllNews = () => api.get(GETALL_NEWS)

export const getPaginationNews = payload => api.get(PAGINATION_GETALL_NEWS(payload))

export const topNews = () => api.get(GET_TOP_NEWS);

export const topArticles = () => api.get(GET_TOP_ARTICLES)

export const getNewsById = payload => api.get(GETALL_NEWS_BY_ID(payload))
