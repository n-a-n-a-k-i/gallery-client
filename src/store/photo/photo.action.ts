import {Dispatch} from "redux";
import {DateColumn, PhotoAction, PhotoActionType, PhotoFind, PhotoFindParams, PhotoFindTotalParams} from "./photo.type";
import PhotoService from "./photo.service";
import {ErrorMessage, getErrors} from "../../utility/error-response";

/**
 * Поиск фотографий
 * @param photoFindParams
 */
export const photoFind = (
    photoFindParams: PhotoFindParams
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.FIND
        })

        const response = await PhotoService.find(photoFindParams)

        dispatch({
            type: PhotoActionType.FIND_SUCCESS,
            payload: response.data
        })

    } catch (error) {

        dispatch({
            type: PhotoActionType.FIND_ERROR,
            payload: getErrors(error)
        })

    }

})

/**
 * Удаление фотографии
 * @param id
 */
export const photoRemove = (
    id: string
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.REMOVE
        })

        await PhotoService.remove(id)

        dispatch({
            type: PhotoActionType.REMOVE_SUCCESS,
            payload: id
        })

    } catch (error) {

        dispatch({
            type: PhotoActionType.REMOVE_ERROR,
            payload: getErrors(error)
        })

    }

})

/**
 * Скачивание фотографии
 * @param id
 */
export const photoDownload = (
    id: string
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.DOWNLOAD
        })

        const response = await PhotoService.download(id)

        if (!response.data) {
            return dispatch({
                type: PhotoActionType.DOWNLOAD_ERROR,
                payload: [ErrorMessage.FILE_NOTE_FOUND]
            })
        }

        const fileBase = response.headers['content-disposition']?.split('"')[1] || id + '.jpg'
        const link = document.createElement('a')

        link.href = window.URL.createObjectURL(response.data)
        link.setAttribute('download', fileBase)
        document.body.appendChild(link)
        link.click()
        link.remove()

        dispatch({
            type: PhotoActionType.DOWNLOAD_SUCCESS
        })

    } catch (error) {

        dispatch({
            type: PhotoActionType.DOWNLOAD_ERROR,
            payload: getErrors(error)
        })

    }

})

/**
 * Поиск количества фотографий
 * @param photoFindTotalParams
 */
export const photoFindTotal = (
    photoFindTotalParams: PhotoFindTotalParams
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.FIND_TOTAL
        })

        const response = await PhotoService.findTotal(photoFindTotalParams)

        dispatch({
            type: PhotoActionType.FIND_TOTAL_SUCCESS,
            payload: response.data
        })

    } catch (error) {

        dispatch({
            type: PhotoActionType.FIND_TOTAL_ERROR,
            payload: getErrors(error)
        })

    }

})

/**
 * Поиск количества фотографий по частям даты
 * @param dateColumn
 */
export const photoFindTotalDate = (
    dateColumn: DateColumn
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.FIND_TOTAL_DATE
        })

        const response = await PhotoService.findTotalDate(dateColumn)

        dispatch({
            type: PhotoActionType.FIND_TOTAL_DATE_SUCCESS,
            payload: response.data
        })

    } catch (error) {

        dispatch({
            type: PhotoActionType.FIND_TOTAL_DATE_ERROR,
            payload: getErrors(error)
        })

    }

})

/**
 * Установка параметров
 * @param photoFind
 */
export const photoSetParams = (
    photoFind: PhotoFind
) => ((dispatch: Dispatch<PhotoAction>) => {

    dispatch({
        type: PhotoActionType.SET_PARAMS,
        payload: photoFind
    })

})

/**
 * Установка фотографии для предпросмотра
 * @param preview
 */
export const photoSetPreview = (
    preview: number
) => ((dispatch: Dispatch<PhotoAction>) => {

    dispatch({
        type: PhotoActionType.SET_PREVIEW,
        payload: preview
    })

})
