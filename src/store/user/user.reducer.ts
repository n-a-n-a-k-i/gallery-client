import {UserAction, UserActionType, UserState} from "./user.type";

const initialState: UserState = {

    users: [],

    isFind: false,
    errors: []

}

export const userReducer = (state: UserState = initialState, action: UserAction) => {
    switch (action.type) {

        // Поиск пользователей

        case UserActionType.USER_FIND:
            return {
                ...state,
                isFind: true,
                errors: []
            }
        case UserActionType.USER_FIND_SUCCESS:
            return {
                ...state,
                users: action.payload,
                isFind: false
            }
        case UserActionType.USER_FIND_ERROR:
            return {
                ...state,
                isFind: false,
                errors: action.payload
            }

        // Состояние по умолчанию

        default:
            return state

    }
}
