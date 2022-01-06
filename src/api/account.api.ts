import axios from "axios";

export const accountApi = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    withCredentials: true
})
