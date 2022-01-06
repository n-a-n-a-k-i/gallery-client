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

    preview: Photo | null

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

interface PhotoFindAction {
    type: PhotoActionType.FIND
}

interface PhotoFindSuccessAction {
    type: PhotoActionType.FIND_SUCCESS
    payload: Photo[]
}

interface PhotoFindErrorAction {
    type: PhotoActionType.FIND_ERROR
    payload: string[]
}

// Изменение фотографии

interface PhotoUpdateAction {
    type: PhotoActionType.UPDATE
}

interface PhotoUpdateSuccessAction {
    type: PhotoActionType.UPDATE_SUCCESS
    payload: Photo
}

interface PhotoUpdateErrorAction {
    type: PhotoActionType.UPDATE_ERROR
    payload: string[]
}

// Удаление фотографий

interface PhotoRemoveAction {
    type: PhotoActionType.REMOVE
}

interface PhotoRemoveSuccessAction {
    type: PhotoActionType.REMOVE_SUCCESS
    payload: Photo[]
}

interface PhotoRemoveErrorAction {
    type: PhotoActionType.REMOVE_ERROR
    payload: string[]
}

// Скачивание фотографии

interface PhotoDownloadAction {
    type: PhotoActionType.DOWNLOAD
}

interface PhotoDownloadSuccessAction {
    type: PhotoActionType.DOWNLOAD_SUCCESS
}

interface PhotoDownloadErrorAction {
    type: PhotoActionType.DOWNLOAD_ERROR
    payload: string[]
}

// Поиск количества фотографий

interface PhotoFindTotalAction {
    type: PhotoActionType.FIND_TOTAL
}

interface PhotoFindTotalSuccessAction {
    type: PhotoActionType.FIND_TOTAL_SUCCESS,
    payload: number
}

interface PhotoFindTotalErrorAction {
    type: PhotoActionType.FIND_TOTAL_ERROR,
    payload: string[]
}

// Поиск количества фотографий по частям даты

interface PhotoFindTotalDateAction {
    type: PhotoActionType.FIND_TOTAL_DATE
}

interface PhotoFindTotalDateSuccessAction {
    type: PhotoActionType.FIND_TOTAL_DATE_SUCCESS,
    payload: TotalDate
}

interface PhotoFindTotalDateErrorAction {
    type: PhotoActionType.FIND_TOTAL_DATE_ERROR,
    payload: string[]
}

// Предпросмотр фотографии

interface PhotoSetPreviewAction {
    type: PhotoActionType.SET_PREVIEW,
    payload: Photo | null
}

// Установка параметров

interface PhotoSetParamsAction {
    type: PhotoActionType.SET_PARAMS
    payload: PhotoFind
}

// Действия

export type PhotoAction = (

    PhotoFindAction
    | PhotoFindSuccessAction
    | PhotoFindErrorAction

    | PhotoUpdateAction
    | PhotoUpdateSuccessAction
    | PhotoUpdateErrorAction

    | PhotoRemoveAction
    | PhotoRemoveSuccessAction
    | PhotoRemoveErrorAction

    | PhotoDownloadAction
    | PhotoDownloadSuccessAction
    | PhotoDownloadErrorAction

    | PhotoFindTotalAction
    | PhotoFindTotalSuccessAction
    | PhotoFindTotalErrorAction

    | PhotoFindTotalDateAction
    | PhotoFindTotalDateSuccessAction
    | PhotoFindTotalDateErrorAction

    | PhotoSetPreviewAction

    | PhotoSetParamsAction

)
