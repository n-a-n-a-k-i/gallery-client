import {AccountAction, AccountActionType, AccountState} from "./account.type";

const initialState: AccountState = {
    user: null,
    isLoading: false,
    errors: []
}

export const accountReducer = (state = initialState, action: AccountAction): AccountState => {
    switch (action.type) {

        case AccountActionType.SIGN_IN:
            return {
                ...state,
                isLoading: true
            }
        case AccountActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false
            }
        case AccountActionType.SIGN_IN_ERROR:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
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
                isLoading: false
            }
        case AccountActionType.REFRESH_ERROR:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
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
                isLoading: false
            }
        case AccountActionType.SIGN_OUT_ERROR:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            }

        default:
            return state
    }
}
