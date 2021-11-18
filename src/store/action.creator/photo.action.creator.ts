import {Dispatch} from "redux";
import {OrderColumn, OrderDirection, PhotoAction, PhotoActionType,} from "../../type/photo.type";
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

        console.log('fetchPhotos', 0)

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS
        })

        console.log('fetchPhotos', 1)

        const response = await PhotoService.fetchAll(
            years, months, days, orderColumn, orderDirection, limit, offset
        )

        console.log('fetchPhotos', 2)

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS_SUCCESS,
            payload: response.data
        })

        console.log('fetchPhotos', 3)

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

        console.log('setPhotoParams', 0)

        dispatch({
            type: PhotoActionType.SET_PHOTO_PARAMS,
            payload: {years, months, days, orderColumn, orderDirection, limit}
        })

        console.log('setPhotoParams', 1)

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL
        })

        console.log('setPhotoParams', 2)

        const response = await PhotoService.fetchTotal(years, months, days)

        console.log('setPhotoParams', 3)

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL_SUCCESS,
            payload: response.data
        })

        console.log('setPhotoParams', 4)

    } catch (error: any) {

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL_ERROR,
            payload: error.response.data.message
        })

    }

})
