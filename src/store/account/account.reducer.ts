import {AccountAction, AccountActionType, AccountState} from "./account.type";

const initialState: AccountState = {

    user: null,

    isSignIn: false,
    isRefresh: false,
    isSignOut: false,
    errors: []

}

export const accountReducer = (state = initialState, action: AccountAction): AccountState => {
    switch (action.type) {

        // Вход

        case AccountActionType.SIGN_IN:
            return {
                ...state,
                isSignIn: true,
                errors: []
            }
        case AccountActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isSignIn: false
            }
        case AccountActionType.SIGN_IN_ERROR:
            return {
                ...state,
                isSignIn: false,
                errors: action.payload
            }

        // Обновление токенов

        case AccountActionType.REFRESH:
            return {
                ...state,
                isRefresh: true,
                errors: []
            }
        case AccountActionType.REFRESH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isRefresh: false
            }
        case AccountActionType.REFRESH_ERROR:
            return {
                ...state,
                isRefresh: false,
                errors: action.payload
            }

        // Выход

        case AccountActionType.SIGN_OUT:
            return {
                ...state,
                isSignOut: true,
                errors: []
            }
        case AccountActionType.SIGN_OUT_SUCCESS:
            return {
                ...state,
                user: null,
                isSignOut: false
            }
        case AccountActionType.SIGN_OUT_ERROR:
            return {
                ...state,
                isSignOut: false,
                errors: action.payload
            }

        // Состояние по умолчанию

        default:
            return state

    }
}
