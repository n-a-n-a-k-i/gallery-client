import {AccountAction, AccountActionType, AccountState} from "../../type/account.type";

const initialState: AccountState = {
    user: null,
    error: null,
    loading: false
}

export const accountReducer = (state = initialState, action: AccountAction): AccountState => {
    switch (action.type) {

        case AccountActionType.SIGN_IN:
            return {
                ...state,
                user: null,
                error: null,
                loading: true
            }
        case AccountActionType.SIGN_IN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case AccountActionType.SIGN_IN_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case AccountActionType.REFRESH:
            return {
                ...state,
                user: null,
                error: null,
                loading: true
            }
        case AccountActionType.REFRESH_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case AccountActionType.REFRESH_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        case AccountActionType.SIGN_OUT:
            return {
                ...state,
                error: null,
                loading: true
            }
        case AccountActionType.SIGN_OUT_SUCCESS:
            return {
                ...state,
                user: null,
                loading: false
            }
        case AccountActionType.SIGN_OUT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}
