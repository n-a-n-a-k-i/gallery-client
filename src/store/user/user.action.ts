import {Dispatch} from "redux";
import {UserAction, UserActionType} from "./user.type";
import UserService from "./user.service";
import {getErrors} from "../../utility/error-response";

/**
 * Поиск пользователей
 */
export const userFind = () => (async (dispatch: Dispatch<UserAction>) => {

    try {

        dispatch({
            type: UserActionType.USER_FIND
        })

        const response = await UserService.find()

        dispatch({
            type: UserActionType.USER_FIND_SUCCESS,
            payload: response.data
        })

    } catch (error) {

        dispatch({
            type: UserActionType.USER_FIND_ERROR,
            payload: getErrors(error)
        })

    }

})
