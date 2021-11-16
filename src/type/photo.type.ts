export interface Photo {
    id: string
    dateCreate: Date
    dateImport: Date
    user: string
}

export enum DateColumn {
    dateCreate = 'dateCreate',
    dateImport = 'dateImport'
}

export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface PhotoTotalQuery {
    years: number[]
    months: number[]
    days: number[]
}

export interface PhotoQuery extends PhotoTotalQuery{

    timeStart: number

    limit: number
    dateColumn: DateColumn
    sortDirection: SortDirection

}

export interface PhotoState extends PhotoQuery {

    items: Photo[]
    total: number

    isLoading: boolean
    error: null | string[]

}

export enum PhotoActionType {

    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',

    FETCH_PHOTO_TOTAL = 'FETCH_PHOTO_TOTAL',
    FETCH_PHOTO_TOTAL_SUCCESS = 'FETCH_PHOTO_TOTAL_SUCCESS',
    FETCH_PHOTO_TOTAL_ERROR = 'FETCH_PHOTO_TOTAL_ERROR',

    SET_PHOTO_TIME_START = 'SET_PHOTO_TIME_START',
    SET_PHOTO_QUERY = 'SET_PHOTO_QUERY'

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

interface SetPhotoTimeStartAction {
    type: PhotoActionType.SET_PHOTO_TIME_START,
    payload: number
}

interface SetPhotoQueryAction {
    type: PhotoActionType.SET_PHOTO_QUERY
    payload: PhotoQuery
}

export type PhotoAction =
    FetchPhotosAction
    | FetchPhotosSuccessAction
    | FetchPhotosErrorAction
    | FetchPhotoTotalAction
    | FetchPhotoTotalSuccessAction
    | FetchPhotoTotalErrorAction
    | SetPhotoTimeStartAction
    | SetPhotoQueryAction
