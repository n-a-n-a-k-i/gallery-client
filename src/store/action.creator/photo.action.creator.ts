import {Dispatch} from "redux";
import {DateColumn, PhotoAction, PhotoActionType, SortDirection} from "../../type/photo.type";
import PhotoService from "../../service/photo.service";

export const fetchPhotos = (
    timeStart: number,
    limit: number,
    dateColumn: DateColumn,
    sortDirection: SortDirection,
    years: number[],
    months: number[],
    days: number[]
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS
        })

        const response = await PhotoService.fetchPhotos(
            timeStart, limit, dateColumn, sortDirection, years, months, days
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

export const setPhotoQuery = (
    limit: number,
    dateColumn: DateColumn,
    sortDirection: SortDirection,
    years: number[],
    months: number[],
    days: number[]
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL
        })
        console.log(1)

        const response = await PhotoService.fetchPhotoTotal(years, months, days)

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL_SUCCESS,
            payload: response.data
        })
        console.log(2)
        dispatch({
            type: PhotoActionType.SET_PHOTO_QUERY,
            payload: {

                timeStart: sortDirection === SortDirection.DESC ? Date.now() : 0,

                limit,
                dateColumn,
                sortDirection,

                years,
                months,
                days

            }
        })
        console.log(3)

    } catch (error: any) {

        dispatch({
            type: PhotoActionType.FETCH_PHOTO_TOTAL_ERROR,
            payload: error.response.data.message
        })

    }

})
