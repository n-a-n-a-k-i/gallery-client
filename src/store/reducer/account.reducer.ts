import {AccountAction, AccountActionType, AccountState} from "../../type/account";

const initialState: AccountState = {
    user: null,
    isAuth: false,
    isLoading: false
}

export const AccountReducer = (state = initialState, action: AccountAction): AccountState => {
    switch (action.type) {
        case AccountActionType.SET_USER:
            return {...state, user: action.payload}
        case AccountActionType.SET_AUTH:
            return {...state, isAuth: action.payload}
        case AccountActionType.SET_LOADING:
            return {...state, isLoading: action.payload}
        default:
            return state
    }
}