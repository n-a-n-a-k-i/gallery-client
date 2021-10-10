interface Payload {
    id: string
    permissions: string[]
}

export interface AccountState {
    user: Payload | null
    isAuth: boolean
    isLoading: boolean
}

export enum AccountActionType {
    SET_USER = 'SET_USER',
    SET_AUTH = 'SET_AUTH',
    SET_LOADING = 'SET_LOADING'
}

interface AccountActionSetUser {
    type: AccountActionType.SET_USER
    payload: Payload | null
}

interface AccountActionSetAuth {
    type: AccountActionType.SET_AUTH
    payload: boolean
}

interface AccountActionSetLoading {
    type: AccountActionType.SET_LOADING
    payload: boolean
}

export type AccountAction = AccountActionSetUser | AccountActionSetAuth | AccountActionSetLoading