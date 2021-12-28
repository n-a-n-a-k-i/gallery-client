export interface Photo {
    id: string
    user: string
    date: string
    atime: string
    mtime: string
    ctime: string
    birthtime: string
    createdAt: string
    updatedAt: string
}

export enum DateColumn {
    date = 'date',
    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt'
}

export enum OrderDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface PhotoParams {
    years: number[]
    months: number[]
    days: number[]
    dateColumn: DateColumn
    orderDirection: OrderDirection
    limit: number
}

export interface PhotoState extends PhotoParams {
    items: Photo[]
    total: number | null
    isLoading: boolean
    error: null | string[]
    isFinish: boolean
    preview: Photo | null
}

export enum PhotoActionType {

    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR',

    FETCH_PHOTO_TOTAL = 'FETCH_PHOTO_TOTAL',
    FETCH_PHOTO_TOTAL_SUCCESS = 'FETCH_PHOTO_TOTAL_SUCCESS',
    FETCH_PHOTO_TOTAL_ERROR = 'FETCH_PHOTO_TOTAL_ERROR',

    SET_PHOTO_PREVIEW = 'SET_PHOTO_PREVIEW',
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

interface SetPhotoPreviewAction {
    type: PhotoActionType.SET_PHOTO_PREVIEW,
    payload: Photo | null
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
    | SetPhotoPreviewAction
    | SetPhotoParamsAction
