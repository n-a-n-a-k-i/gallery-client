import {Dispatch} from "redux";
import {UserAction, UserActionType} from "../../type/user";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionType.FETCH_USERS
            })
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({
                    type: UserActionType.FETCH_USERS_SUCCESS,
                    payload: response.data
                })
            }, 200)
        } catch (e) {
            dispatch({
                type: UserActionType.FETCH_USERS_ERROR,
                payload: 'Ошибка при загрузке пользователей'
            })
        }
    }
}
