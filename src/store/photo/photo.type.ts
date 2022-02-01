// Фотография

export interface PhotoUpdate {
    id: string
    user: string
    date: string
}

export interface Photo extends PhotoUpdate {

    atime: string
    mtime: string
    ctime: string
    birthtime: string

    createdAt: string
    updatedAt: string

}

// Количество фотографий по частям даты

export interface TotalDatePart {
    value: number
    total: number
}

export interface TotalDate {
    totalYears: TotalDatePart[]
    totalMonths: TotalDatePart[]
    totalDays: TotalDatePart[]
}

// Параметры для запроса количества фотографий

export enum DateColumn {

    date = 'date',

    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',

    createdAt = 'createdAt',
    updatedAt = 'updatedAt'

}

export interface PhotoFindTotalParams {
    years: number[]
    months: number[]
    days: number[]
    dateColumn: DateColumn
}

// Параметры для запроса фотографий

export enum OrderDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export interface PhotoFind extends PhotoFindTotalParams {
    orderDirection: OrderDirection
    limit: number
}

export interface PhotoFindParams extends PhotoFind {
    offset: number
}

// Состояние

export interface PhotoState extends PhotoFind, TotalDate {

    photos: Photo[]
    total: number

    isFind: boolean
    isCreate: boolean
    isUpdate: boolean
    isRemove: boolean
    isDownload: boolean
    isFindTotal: boolean
    isFindTotalDate: boolean
    errors: string[]

    preview: number

}

// Типы действий

export enum PhotoActionType {

    FIND = 'FIND',
    FIND_SUCCESS = 'FIND_SUCCESS',
    FIND_ERROR = 'FIND_ERROR',

    UPDATE = 'UPDATE',
    UPDATE_SUCCESS = 'UPDATE_SUCCESS',
    UPDATE_ERROR = 'UPDATE_ERROR',

    REMOVE = 'REMOVE',
    REMOVE_SUCCESS = 'REMOVE_SUCCESS',
    REMOVE_ERROR = 'REMOVE_ERROR',

    DOWNLOAD = 'DOWNLOAD',
    DOWNLOAD_SUCCESS = 'DOWNLOAD_SUCCESS',
    DOWNLOAD_ERROR = 'DOWNLOAD_ERROR',

    FIND_TOTAL = 'FIND_TOTAL',
    FIND_TOTAL_SUCCESS = 'FIND_TOTAL_SUCCESS',
    FIND_TOTAL_ERROR = 'FIND_TOTAL_ERROR',

    FIND_TOTAL_DATE = 'FIND_TOTAL_DATE',
    FIND_TOTAL_DATE_SUCCESS = 'FIND_TOTAL_DATE_SUCCESS',
    FIND_TOTAL_DATE_ERROR = 'FIND_TOTAL_DATE_ERROR',

    SET_PREVIEW = 'SET_PREVIEW',
    SET_PARAMS = 'SET_PARAMS'

}

// Поиск фотографий

interface PhotoActionFind {
    type: PhotoActionType.FIND
}

interface PhotoActionFindSuccess {
    type: PhotoActionType.FIND_SUCCESS
    payload: Photo[]
}

interface PhotoActionFindError {
    type: PhotoActionType.FIND_ERROR
    payload: string[]
}

// Изменение фотографии

interface PhotoActionUpdate {
    type: PhotoActionType.UPDATE
}

interface PhotoActionUpdateSuccess {
    type: PhotoActionType.UPDATE_SUCCESS
    payload: Photo
}

interface PhotoActionUpdateError {
    type: PhotoActionType.UPDATE_ERROR
    payload: string[]
}

// Удаление фотографий

interface PhotoActionRemove {
    type: PhotoActionType.REMOVE
}

interface PhotoActionRemoveSuccess {
    type: PhotoActionType.REMOVE_SUCCESS
    payload: Photo[]
}

interface PhotoActionRemoveError {
    type: PhotoActionType.REMOVE_ERROR
    payload: string[]
}

// Скачивание фотографии

interface PhotoActionDownload {
    type: PhotoActionType.DOWNLOAD
}

interface PhotoActionDownloadSuccess {
    type: PhotoActionType.DOWNLOAD_SUCCESS
}

interface PhotoActionDownloadError {
    type: PhotoActionType.DOWNLOAD_ERROR
    payload: string[]
}

// Поиск количества фотографий

interface PhotoActionFindTotal {
    type: PhotoActionType.FIND_TOTAL
}

interface PhotoActionFindTotalSuccess {
    type: PhotoActionType.FIND_TOTAL_SUCCESS,
    payload: number
}

interface PhotoActionFindTotalError {
    type: PhotoActionType.FIND_TOTAL_ERROR,
    payload: string[]
}

// Поиск количества фотографий по частям даты

interface PhotoActionFindTotalDate {
    type: PhotoActionType.FIND_TOTAL_DATE
}

interface PhotoActionFindTotalDateSuccess {
    type: PhotoActionType.FIND_TOTAL_DATE_SUCCESS,
    payload: TotalDate
}

interface PhotoActionFindTotalDateError {
    type: PhotoActionType.FIND_TOTAL_DATE_ERROR,
    payload: string[]
}

// Установка параметров

interface PhotoActionSetParams {
    type: PhotoActionType.SET_PARAMS
    payload: PhotoFind
}

// Установка фотографии для предпросмотра

interface PhotoActionSetPreview {
    type: PhotoActionType.SET_PREVIEW,
    payload: number
}

// Действия

export type PhotoAction = (

    PhotoActionFind
    | PhotoActionFindSuccess
    | PhotoActionFindError

    | PhotoActionUpdate
    | PhotoActionUpdateSuccess
    | PhotoActionUpdateError

    | PhotoActionRemove
    | PhotoActionRemoveSuccess
    | PhotoActionRemoveError

    | PhotoActionDownload
    | PhotoActionDownloadSuccess
    | PhotoActionDownloadError

    | PhotoActionFindTotal
    | PhotoActionFindTotalSuccess
    | PhotoActionFindTotalError

    | PhotoActionFindTotalDate
    | PhotoActionFindTotalDateSuccess
    | PhotoActionFindTotalDateError

    | PhotoActionSetParams

    | PhotoActionSetPreview

)
