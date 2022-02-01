import {DateColumn, OrderDirection, PhotoAction, PhotoActionType, PhotoState} from "./photo.type";

const initialState: PhotoState = {

    photos: [],
    total: 0,
    totalYears: [],
    totalMonths: [],
    totalDays: [],

    isFind: false,
    isCreate: false,
    isUpdate: false,
    isRemove: false,
    isDownload: false,
    isFindTotal: false,
    isFindTotalDate: false,
    errors: [],

    preview: -1,

    years: [],
    months: [],
    days: [],
    dateColumn: DateColumn.date,
    orderDirection: OrderDirection.DESC,
    limit: 0

}

export const photoReducer = (state: PhotoState = initialState, action: PhotoAction) => {
    switch (action.type) {

        // Поиск фотографий

        case PhotoActionType.FIND:
            return {
                ...state,
                isFind: true,
                errors: []
            }
        case PhotoActionType.FIND_SUCCESS:
            return {
                ...state,
                photos: [
                    ...state.photos,
                    ...action.payload
                ],
                isFind: false
            }
        case PhotoActionType.FIND_ERROR:
            return {
                ...state,
                isFind: false,
                errors: action.payload
            }

        // Изменение фотографии

        case PhotoActionType.UPDATE:
            return {
                ...state,
                isUpdate: true,
                errors: []
            }
        case PhotoActionType.UPDATE_SUCCESS:
            return {
                ...state,
                photos: [
                    ...state.photos.map(photo => {

                        if (photo.id !== action.payload.id) {
                            return photo
                        }

                        return {
                            ...photo,
                            ...action.payload
                        }

                    })
                ],
                isUpdate: false
            }
        case PhotoActionType.UPDATE_ERROR:
            return {
                ...state,
                isUpdate: false,
                errors: action.payload
            }

        // Удаление фотографий

        case PhotoActionType.REMOVE:
            return {
                ...state,
                isRemove: true,
                errors: []
            }
        case PhotoActionType.REMOVE_SUCCESS:
            return {
                ...state,
                photos: [
                    ...state.photos.filter(photo => (
                        !action.payload.find(deleted => (
                            deleted.id === photo.id
                        ))
                    ))
                ],
                isRemove: false
            }
        case PhotoActionType.REMOVE_ERROR:
            return {
                ...state,
                isRemove: false,
                errors: action.payload
            }

        // Скачивание фотографии

        case PhotoActionType.DOWNLOAD:
            return {
                ...state,
                isDownload: true,
                errors: []
            }
        case PhotoActionType.DOWNLOAD_SUCCESS:
            return {
                ...state,
                isDownload: false
            }
        case PhotoActionType.DOWNLOAD_ERROR:
            return {
                ...state,
                isDownload: false,
                errors: action.payload
            }

        // Поиск количества фотографий

        case PhotoActionType.FIND_TOTAL:
            return {
                ...state,
                isFindTotal: true,
                errors: []
            }
        case PhotoActionType.FIND_TOTAL_SUCCESS:
            return {
                ...state,
                total: action.payload,
                isFindTotal: false
            }
        case PhotoActionType.FIND_TOTAL_ERROR:
            return {
                ...state,
                isFindTotal: false,
                errors: action.payload
            }

        // Поиск количества фотографий по частям даты

        case PhotoActionType.FIND_TOTAL_DATE:
            return {
                ...state,
                isFindTotalDate: true,
                errors: []
            }
        case PhotoActionType.FIND_TOTAL_DATE_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isFindTotalDate: false
            }
        case PhotoActionType.FIND_TOTAL_DATE_ERROR:
            return {
                ...state,
                isFindTotalDate: false,
                errors: action.payload
            }

        // Установка параметров

        case PhotoActionType.SET_PARAMS:
            return {
                ...state,
                photos: [],
                ...action.payload
            }

        // Предпросмотр

        case PhotoActionType.SET_PREVIEW:
            return {
                ...state,
                preview: action.payload
            }

        // Состояние по умолчанию

        default:
            return state

    }
}
