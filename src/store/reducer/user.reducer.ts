import {UserAction, UserActionType, UserState} from "../../type/user";

const initialState: UserState = {
    items: [],
    loading: false,
    error: null
}

export const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USERS:
            return {loading: true, error: null, items: []}
        case UserActionType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, items: action.payload}
        case UserActionType.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, items: []}
        default:
            return state
    }
}