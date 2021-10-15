import {UserAction, UserActionType, UserState} from "../../type/user";

const initialState: UserState = {
    items: [],
    loading: false,
    error: null
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        case UserActionType.FETCH_USERS_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false
            }
        case UserActionType.FETCH_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
