import {PhotoAction, PhotoActionType, PhotoState, DateColumn, SortDirection} from "../../type/photo.type";

const initialState: PhotoState = {
    items: [],
    isLoading: false,
    error: null,
    timeStart: Date.now(),
    limit: 0,
    dateColumn: DateColumn.dateCreate,
    sortDirection: SortDirection.DESC
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
                items: action.payload,
                isLoading: false
            }
        case PhotoActionType.FETCH_PHOTOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case PhotoActionType.SET_PHOTO_LIMIT:
            return {
                ...state,
                limit: action.payload
            }
        default:
            return state
    }
}
