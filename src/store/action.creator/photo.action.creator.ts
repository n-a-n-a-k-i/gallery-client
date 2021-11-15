import {Dispatch} from "redux";
import {DateColumn, PhotoAction, PhotoActionType, SortDirection} from "../../type/photo.type";
import PhotoService from "../../service/photo.service";

export const fetchPhotos = (
    timeStart: number,
    limit: number,
    dateColumn: DateColumn,
    sortDirection: SortDirection
) => (async (dispatch: Dispatch<PhotoAction>) => {

    try {

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS
        })

        const response = await PhotoService.fetchPhotos(timeStart, limit, dateColumn, sortDirection)

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS_SUCCESS,
            payload: response.data
        })

    } catch (error: any) {

        dispatch({
            type: PhotoActionType.FETCH_PHOTOS_ERROR,
            payload: error.response?.data?.message
        })

    }

})
