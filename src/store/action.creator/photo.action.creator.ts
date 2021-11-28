import {Dispatch} from "redux";
import {OrderColumn, OrderDirection, Photo, PhotoAction, PhotoActionType,} from "../../type/photo.type";
import PhotoService from "../../service/photo.service";
import Format from "../../util/format";

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

export const downloadPhoto = (preview: Photo) => (async () => {

    const response = await PhotoService.download(preview.id)

    if (!response.data) {
        return
    }

    const blob = new Blob([response.data])
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')

    link.href = url
    link.setAttribute('download', Format.getFileName(preview))
    document.body.appendChild(link)
    link.click()
    link.remove()

})
