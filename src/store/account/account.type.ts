// Пользователь

export enum Permission {
    USER_CREATE = 'USER_CREATE',
    USER_UPDATE = 'USER_UPDATE',
    USER_REMOVE = 'USER_REMOVE',
    PHOTO_CREATE = 'PHOTO_CREATE',
    PHOTO_UPDATE = 'PHOTO_UPDATE',
    PHOTO_REMOVE = 'PHOTO_REMOVE',
    TAG_CREATE = 'TAG_CREATE',
    TAG_UPDATE = 'TAG_UPDATE',
    TAG_REMOVE = 'TAG_REMOVE'
}


export interface User {
    id: string
    permissions: Permission[]
}

// Параметры для входа

export interface AccountSignIn {
    username: string
    password: string
}

export interface AccountAccessToken {
    accessToken: string
}

// Состояние

export interface AccountState {

    user: null | User

    isSignIn: boolean
    isRefresh: boolean
    isSignOut: boolean
    errors: string[]

}

// Типы действий

export enum AccountActionType {

    SIGN_IN = 'SIGN_IN',
    SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS',
    SIGN_IN_ERROR = 'SIGN_IN_ERROR',

    REFRESH = 'REFRESH',
    REFRESH_SUCCESS = 'REFRESH_SUCCESS',
    REFRESH_ERROR = 'REFRESH_ERROR',

    SIGN_OUT = 'SIGN_OUT',
    SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS',
    SIGN_OUT_ERROR = 'SIGN_OUT_ERROR'

}

// Вход

interface AccountActionSignIn {
    type: AccountActionType.SIGN_IN
}

interface AccountActionSignInSuccess {
    type: AccountActionType.SIGN_IN_SUCCESS
    payload: User
}

interface AccountActionSignInError {
    type: AccountActionType.SIGN_IN_ERROR
    payload: string[]
}

// Обновление токенов

interface AccountActionRefresh {
    type: AccountActionType.REFRESH
}

interface AccountActionRefreshSuccess {
    type: AccountActionType.REFRESH_SUCCESS
    payload: User
}

interface AccountActionRefreshError {
    type: AccountActionType.REFRESH_ERROR
    payload: string[]
}

// Выход

interface AccountActionSignOut {
    type: AccountActionType.SIGN_OUT
}

interface AccountActionSignOutSuccess {
    type: AccountActionType.SIGN_OUT_SUCCESS
}

interface AccountActionSignOutError {
    type: AccountActionType.SIGN_OUT_ERROR
    payload: string[]
}

// Действия

export type AccountAction = (

    AccountActionSignIn
    | AccountActionSignInSuccess
    | AccountActionSignInError

    | AccountActionRefresh
    | AccountActionRefreshSuccess
    | AccountActionRefreshError

    | AccountActionSignOut
    | AccountActionSignOutSuccess
    | AccountActionSignOutError

)
