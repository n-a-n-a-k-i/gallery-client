import {Dispatch} from "redux";
import {OrderColumn, OrderDirection, Photo, PhotoAction, PhotoActionType,} from "./photo.type";
import PhotoService from "../../service/photo.service";

export const fetchPhotos = (
    years: number[],
    months: number[],
    days: number[],
    orderColumn: OrderColumn,
    orderDirection: OrderDirection,
    limit: number,
    offset: number
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS
        })

        const response = await PhotoService.fetchAll(
            years, months, days, orderColumn, orderDirection, limit, offset
        )

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS_SUCCESS,
            payload: response.data
        })

    } catch (error: any) {

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS_ERROR,
            payload: error.response.data.message
        })

    }

})

export const setPhotoParams = (
    years: number[],
    months: number[],
    days: number[],
    orderColumn: OrderColumn,
    orderDirection: OrderDirection,
    limit: number
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.SET_PHOTO_PARAMS,
            payload: {years, months, days, orderColumn, orderDirection, limit}
        })

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL
        })

        const response = await PhotoService.fetchTotal(years, months, days)

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL_SUCCESS,
            payload: response.data
        })

    } catch (error: any) {

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL_ERROR,
            payload: error.response.data.message
        })

    }

})

export const setPhotoPreview = (preview: Photo | null) => ((dispatch: Dispatch<PhotoAction>) => {

    dispatch({
        type: PhotoActionType.SET_PHOTO_PREVIEW,
        payload: preview
    })

})

export const downloadPhoto = (id: string) => (async () => {

    const response = await PhotoService.download(id)

    if (!response.data) {
        return
    }

    const fileName = response.headers['content-disposition']?.split('"')[1] || id + '.jpg'
    const url = window.URL.createObjectURL(response.data)
    const link = document.createElement('a')

    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)
    link.click()
    link.remove()

})
