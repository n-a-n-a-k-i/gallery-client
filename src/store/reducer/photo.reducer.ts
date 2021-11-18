import {OrderColumn, OrderDirection, PhotoAction, PhotoActionType, PhotoState} from "../../type/photo.type";

const initialState: PhotoState = {

    items: [],
    total: null,

    isLoading: false,
    error: null,

    isFinish: false,
    years: [],
    months: [],
    days: [],
    orderColumn: OrderColumn.dateCreate,
    orderDirection: OrderDirection.DESC,
    limit: 0

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
                isLoading: false,
                isFinish: action.payload.length < state.limit
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
                total: null,
                isLoading: true
            }
        case PhotoActionType.FETCH_PHOTO_TOTAL_SUCCESS:
            return {
                ...state,
                total: action.payload,
                isLoading: false
            }
        case PhotoActionType.FETCH_PHOTO_TOTAL_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case PhotoActionType.SET_PHOTO_PARAMS:
            return {
                ...state,
                items: [],
                isFinish: false,
                ...action.payload
            }

        default:
            return state
    }
}
