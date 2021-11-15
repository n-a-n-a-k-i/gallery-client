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

export interface PhotoState {
    items: Photo[]
    isLoading: boolean
    error: null | string
    timeStart: number
    limit: number
    dateColumn: DateColumn
    sortDirection: SortDirection
}

export enum PhotoActionType {
    FETCH_PHOTOS = 'FETCH_PHOTOS',
    FETCH_PHOTOS_SUCCESS = 'FETCH_PHOTOS_SUCCESS',
    FETCH_PHOTOS_ERROR = 'FETCH_PHOTOS_ERROR'
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
    payload: string
}

export type PhotoAction = FetchPhotosAction | FetchPhotosSuccessAction | FetchPhotosErrorAction
