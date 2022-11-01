import { GETALL_COMMENTS, SEND_NEW_COMMENT } from "../endpoints";
import api from "../interceptor";

export const getComment = () => api.get(GETALL_COMMENTS)

export const sendNewComment = payload =>
    api.post(SEND_NEW_COMMENT, {
        postId: payload.postId,
        email: payload.email,
        username: payload.username,
        comment: payload.Comment
    })