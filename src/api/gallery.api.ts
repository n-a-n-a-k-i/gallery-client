import axios from "axios";

const galleryApi = axios.create({
    baseURL: process.env.REACT_APP_GALLERY_SERVER_URL,
    withCredentials: true
})

galleryApi.interceptors.request.use(config => {

    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }

    return config

})

export default galleryApi
