interface User {
    id: number
    name: string
}

export interface UserState {
    items: User[]
    loading: boolean
    error: null | string
}

export enum UserActionType {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}

interface FetchUsersAction {
    type: UserActionType.FETCH_USERS
}

interface FetchUsersSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS
    payload: User[]
}

interface FetchUsersErrorAction {
    type: UserActionType.FETCH_USERS_ERROR
    payload: string
}

export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction
