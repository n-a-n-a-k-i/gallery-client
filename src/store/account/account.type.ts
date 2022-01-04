interface Payload {
    id: string
    permissions: string[]
}

export interface AccountState {
    user: null | Payload
    isLoading: boolean
    errors: string[]
}

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

interface AccountActionSignIn {
    type: AccountActionType.SIGN_IN
}

interface AccountActionSignInSuccess {
    type: AccountActionType.SIGN_IN_SUCCESS
    payload: Payload
}

interface AccountActionSignInError {
    type: AccountActionType.SIGN_IN_ERROR
    payload: string[]
}

interface AccountActionRefresh {
    type: AccountActionType.REFRESH
}

interface AccountActionRefreshSuccess {
    type: AccountActionType.REFRESH_SUCCESS
    payload: Payload
}

interface AccountActionRefreshError {
    type: AccountActionType.REFRESH_ERROR
    payload: string[]
}

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
