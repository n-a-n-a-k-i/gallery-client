import axios from "axios";
import AccountService from "../service/account.service";

const galleryApi = axios.create({
    baseURL: process.env.REACT_APP_GALLERY_SERVER_URL,
    withCredentials: true
})

galleryApi.interceptors.request.use((config) => {

    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }

    return config

})

galleryApi.interceptors.response.use((config) => config, async (error) => {

    if (error.response.status === 401) {

        try {

            const response = await AccountService.refresh()

            localStorage.setItem('accessToken', response.data.accessToken)

            return galleryApi.request(error.config)

        } catch (error) {

            console.log(error)

        }

    }

    throw error

})

export default galleryApi
