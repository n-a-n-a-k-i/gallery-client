import {PermissionDto} from "../permission/permission.type";

// Пользователь

export interface UserDto {

    id: string
    username: string
    isSync: boolean
    isClear: boolean

    cloudUsername: string
    cloudPathScan: string
    cloudPathSync: string

    surname: string
    name: string
    patronymic: string
    birthday: string
    email: string
    phone: string

    createdAt: string
    updatedAt: string

    permissions: PermissionDto[]

}

// Состояние

export interface UserState {

    users: UserDto[]

    isFind: boolean
    errors: string[]

}

// Типы действий

export enum UserActionType {

    USER_FIND = 'USER_FIND',
    USER_FIND_SUCCESS = 'USER_FIND_SUCCESS',
    USER_FIND_ERROR = 'USER_FIND_ERROR'

}

// Поиск пользователей

interface UserActionFind {
    type: UserActionType.USER_FIND
}

interface UserActionFindSuccess {
    type: UserActionType.USER_FIND_SUCCESS
    payload: UserDto[]
}

interface UserActionFindError {
    type: UserActionType.USER_FIND_ERROR
    payload: string[]
}

// Действия

export type UserAction = (

    UserActionFind
    | UserActionFindSuccess
    | UserActionFindError

)
