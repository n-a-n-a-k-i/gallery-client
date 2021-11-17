import {PhotoAction, PhotoActionType, PhotoState, DateColumn, SortDirection} from "../../type/photo.type";

const initialState: PhotoState = {

    items: [],
    total: 0,

    isLoading: false,
    error: null,

    timeStart: 0,

    limit: 0,
    dateColumn: DateColumn.dateCreate,
    sortDirection: SortDirection.DESC,
    years: [],
    months: [],
    days: []

}

export const photoReducer = (state: PhotoState = initialState, action: PhotoAction) => {
    switch (action.type) {

        case PhotoActionType.FETCH_PHOTOS:
            return {
                ...state,
                isLoading: true
            }
        case PhotoActionType.FETCH_PHOTOS_SUCCESS:
            return {
                ...state,
                items: [...state.items, ...action.payload],
                timeStart: (new Date(action.payload[action.payload.length - 1][state.dateColumn])).getTime(),
                isLoading: false
            }
        case PhotoActionType.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case PhotoActionType.FETCH_PHOTO_TOTAL:
            return {
                ...state,
                isLoading: true
            }
        case PhotoActionType.FETCH_PHOTO_TOTAL_SUCCESS:
            return {
                ...state,
                total: action.payload
            }
        case PhotoActionType.FETCH_PHOTO_TOTAL_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case PhotoActionType.SET_PHOTO_TIME_START:
            return {
                ...state,
                timeStart: action.payload
            }

        case PhotoActionType.SET_PHOTO_QUERY:
            return {
                ...state,
                items: [],
                ...action.payload
            }

        default:
            return state
    }
}
