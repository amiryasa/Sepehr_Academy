import { CONTACT_US } from "../endpoints";
import api from "../interceptor";

export const contactUs = payload => api.post(CONTACT_US, payload)