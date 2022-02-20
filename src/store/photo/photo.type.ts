// Фотография

export interface PhotoDto {

    id: string
    user: string
    date: string

    atime: string
    mtime: string
    ctime: string
    birthtime: string

    createdAt: string
    updatedAt: string
    deletedAt: string

}

// Количество фотографий по частям даты

export interface TotalDatePartDto {
    value: number
    total: number
}

export interface TotalDateDto {
    totalYears: TotalDatePartDto[]
    totalMonths: TotalDatePartDto[]
    totalDays: TotalDatePartDto[]
}

// Параметры для запроса количества фотографий

export enum DateColumn {

    date = 'date',

    atime = 'atime',
    mtime = 'mtime',
    ctime = 'ctime',
    birthtime = 'birthtime',

    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    deletedAt = 'deletedAt'

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

export interface PhotoState extends PhotoFind, TotalDateDto {

    photos: PhotoDto[]
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

    PHOTO_FIND = 'PHOTO_FIND',
    PHOTO_FIND_SUCCESS = 'PHOTO_FIND_SUCCESS',
    PHOTO_FIND_ERROR = 'PHOTO_FIND_ERROR',

    PHOTO_UPDATE = 'PHOTO_UPDATE',
    PHOTO_UPDATE_SUCCESS = 'PHOTO_UPDATE_SUCCESS',
    PHOTO_UPDATE_ERROR = 'PHOTO_UPDATE_ERROR',

    PHOTO_REMOVE = 'PHOTO_REMOVE',
    PHOTO_REMOVE_SUCCESS = 'PHOTO_REMOVE_SUCCESS',
    PHOTO_REMOVE_ERROR = 'PHOTO_REMOVE_ERROR',

    PHOTO_DOWNLOAD = 'PHOTO_DOWNLOAD',
    PHOTO_DOWNLOAD_SUCCESS = 'PHOTO_DOWNLOAD_SUCCESS',
    PHOTO_DOWNLOAD_ERROR = 'PHOTO_DOWNLOAD_ERROR',

    PHOTO_FIND_TOTAL = 'PHOTO_FIND_TOTAL',
    PHOTO_FIND_TOTAL_SUCCESS = 'PHOTO_FIND_TOTAL_SUCCESS',
    PHOTO_FIND_TOTAL_ERROR = 'PHOTO_FIND_TOTAL_ERROR',

    PHOTO_FIND_TOTAL_DATE = 'PHOTO_FIND_TOTAL_DATE',
    PHOTO_FIND_TOTAL_DATE_SUCCESS = 'PHOTO_FIND_TOTAL_DATE_SUCCESS',
    PHOTO_FIND_TOTAL_DATE_ERROR = 'PHOTO_FIND_TOTAL_DATE_ERROR',

    PHOTO_SET_PREVIEW = 'PHOTO_SET_PREVIEW',
    PHOTO_SET_PARAMS = 'PHOTO_SET_PARAMS'

}

// Поиск фотографий

interface PhotoActionFind {
    type: PhotoActionType.PHOTO_FIND
}

interface PhotoActionFindSuccess {
    type: PhotoActionType.PHOTO_FIND_SUCCESS
    payload: PhotoDto[]
}

interface PhotoActionFindError {
    type: PhotoActionType.PHOTO_FIND_ERROR
    payload: string[]
}

// Изменение фотографии

interface PhotoActionUpdate {
    type: PhotoActionType.PHOTO_UPDATE
}

interface PhotoActionUpdateSuccess {
    type: PhotoActionType.PHOTO_UPDATE_SUCCESS
    payload: PhotoDto
}

interface PhotoActionUpdateError {
    type: PhotoActionType.PHOTO_UPDATE_ERROR
    payload: string[]
}

// Удаление фотографии

interface PhotoActionRemove {
    type: PhotoActionType.PHOTO_REMOVE
}

interface PhotoActionRemoveSuccess {
    type: PhotoActionType.PHOTO_REMOVE_SUCCESS
    payload: string
}

interface PhotoActionRemoveError {
    type: PhotoActionType.PHOTO_REMOVE_ERROR
    payload: string[]
}

// Скачивание фотографии

interface PhotoActionDownload {
    type: PhotoActionType.PHOTO_DOWNLOAD
}

interface PhotoActionDownloadSuccess {
    type: PhotoActionType.PHOTO_DOWNLOAD_SUCCESS
}

interface PhotoActionDownloadError {
    type: PhotoActionType.PHOTO_DOWNLOAD_ERROR
    payload: string[]
}

// Поиск количества фотографий

interface PhotoActionFindTotal {
    type: PhotoActionType.PHOTO_FIND_TOTAL
}

interface PhotoActionFindTotalSuccess {
    type: PhotoActionType.PHOTO_FIND_TOTAL_SUCCESS,
    payload: number
}

interface PhotoActionFindTotalError {
    type: PhotoActionType.PHOTO_FIND_TOTAL_ERROR,
    payload: string[]
}

// Поиск количества фотографий по частям даты

interface PhotoActionFindTotalDate {
    type: PhotoActionType.PHOTO_FIND_TOTAL_DATE
}

interface PhotoActionFindTotalDateSuccess {
    type: PhotoActionType.PHOTO_FIND_TOTAL_DATE_SUCCESS,
    payload: TotalDateDto
}

interface PhotoActionFindTotalDateError {
    type: PhotoActionType.PHOTO_FIND_TOTAL_DATE_ERROR,
    payload: string[]
}

// Установка параметров

interface PhotoActionSetParams {
    type: PhotoActionType.PHOTO_SET_PARAMS
    payload: PhotoFind
}

// Установка фотографии для предпросмотра

interface PhotoActionSetPreview {
    type: PhotoActionType.PHOTO_SET_PREVIEW,
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
