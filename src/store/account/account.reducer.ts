import {AccountAction, AccountActionType, AccountState} from "./account.type";

const initialState: AccountState = {
    user: null,
    isAuthorized: false,
    isLoading: false,
    error: null
}

export const accountReducer = (state = initialState, action: AccountAction): AccountState => {
    switch (action.type) {

        case AccountActionType.SIGN_IN:
            return {
                ...state,
                user: null,
                isAuthorized: false,
                isLoading: true,
                error: null
            }
        case AccountActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true,
                isLoading: false
            }
        case AccountActionType.SIGN_IN_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        case AccountActionType.REFRESH:
            return {
                ...state,
                isLoading: true
            }
        case AccountActionType.REFRESH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true,
                isLoading: false
            }
        case AccountActionType.REFRESH_ERROR:
            return {
                ...state,
                user: null,
                isAuthorized: false,
                isLoading: false,
                error: action.payload
            }

        case AccountActionType.SIGN_OUT:
            return {
                ...state,
                isLoading: true
            }
        case AccountActionType.SIGN_OUT_SUCCESS:
            return {
                ...state,
                user: null,
                isAuthorized: false,
                isLoading: false
            }
        case AccountActionType.SIGN_OUT_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state
    }
}
