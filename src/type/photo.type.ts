export interface Photo {
    id: string
    dateCreate: Date
    dateImport: Date
    user: string
}

export enum OrderColumn {
    dateCreate = 'dateCreate',
    dateImport = 'dateImport'
}

export enum OrderDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface PhotoParams {
    years: number[]
    months: number[]
    days: number[]
    orderColumn: OrderColumn
    orderDirection: OrderDirection
    limit: number
}

export interface PhotoState extends PhotoParams {
    items: Photo[]
    total: number | null
    isLoading: boolean
    isFinish: boolean
    error: null | string[]
}

export enum PhotoActionType {

    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',

    FETCH_PHOTO_TOTAL = 'FETCH_PHOTO_TOTAL',
    FETCH_PHOTO_TOTAL_SUCCESS = 'FETCH_PHOTO_TOTAL_SUCCESS',
    FETCH_PHOTO_TOTAL_ERROR = 'FETCH_PHOTO_TOTAL_ERROR',

    SET_PHOTO_PARAMS = 'SET_PHOTO_PARAMS'

}

interface FetchPhotosAction {
    type: PhotoActionType.FETCH_PHOTOS
}

interface FetchPhotosSuccessAction {
    type: PhotoActionType.FETCH_PHOTOS_SUCCESS
    payload: Photo[]
}

interface FetchPhotosErrorAction {
    type: PhotoActionType.FETCH_PHOTOS_ERROR
    payload: string[]
}

interface FetchPhotoTotalAction {
    type: PhotoActionType.FETCH_PHOTO_TOTAL
}

interface FetchPhotoTotalSuccessAction {
    type: PhotoActionType.FETCH_PHOTO_TOTAL_SUCCESS,
    payload: number
}

interface FetchPhotoTotalErrorAction {
    type: PhotoActionType.FETCH_PHOTO_TOTAL_ERROR,
    payload: string[]
}

interface SetPhotoParamsAction {
    type: PhotoActionType.SET_PHOTO_PARAMS
    payload: PhotoParams
}

export type PhotoAction =
    FetchPhotosAction
    | FetchPhotosSuccessAction
    | FetchPhotosErrorAction
    | FetchPhotoTotalAction
    | FetchPhotoTotalSuccessAction
    | FetchPhotoTotalErrorAction
    | SetPhotoParamsAction
