import {Permission} from "../permission/permission.type";

// Пользователь

export interface User {
    id: string
    permissions: Permission[]
}

// Параметры для входа

export interface SignInDto {
    username: string
    password: string
}

export interface AccessTokenDto {
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

    ACCOUNT_SIGN_IN = 'ACCOUNT_SIGN_IN',
    ACCOUNT_SIGN_IN_SUCCESS = 'ACCOUNT_SIGN_IN_SUCCESS',
    ACCOUNT_SIGN_IN_ERROR = 'ACCOUNT_SIGN_IN_ERROR',

    ACCOUNT_REFRESH = 'ACCOUNT_REFRESH',
    ACCOUNT_REFRESH_SUCCESS = 'ACCOUNT_REFRESH_SUCCESS',
    ACCOUNT_REFRESH_ERROR = 'ACCOUNT_REFRESH_ERROR',

    ACCOUNT_SIGN_OUT = 'ACCOUNT_SIGN_OUT',
    ACCOUNT_SIGN_OUT_SUCCESS = 'ACCOUNT_SIGN_OUT_SUCCESS',
    ACCOUNT_SIGN_OUT_ERROR = 'ACCOUNT_SIGN_OUT_ERROR'

}

// Вход

interface AccountActionSignIn {
    type: AccountActionType.ACCOUNT_SIGN_IN
}

interface AccountActionSignInSuccess {
    type: AccountActionType.ACCOUNT_SIGN_IN_SUCCESS
    payload: User
}

interface AccountActionSignInError {
    type: AccountActionType.ACCOUNT_SIGN_IN_ERROR
    payload: string[]
}

// Обновление токенов

interface AccountActionRefresh {
    type: AccountActionType.ACCOUNT_REFRESH
}

interface AccountActionRefreshSuccess {
    type: AccountActionType.ACCOUNT_REFRESH_SUCCESS
    payload: User
}

interface AccountActionRefreshError {
    type: AccountActionType.ACCOUNT_REFRESH_ERROR
    payload: string[]
}

// Выход

interface AccountActionSignOut {
    type: AccountActionType.ACCOUNT_SIGN_OUT
}

interface AccountActionSignOutSuccess {
    type: AccountActionType.ACCOUNT_SIGN_OUT_SUCCESS
}

interface AccountActionSignOutError {
    type: AccountActionType.ACCOUNT_SIGN_OUT_ERROR
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
