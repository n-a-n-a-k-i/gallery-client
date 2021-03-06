import {Dispatch} from "redux";
import {AccountAction, AccountActionType, SignInDto} from "./account.type";
import AccountService from "./account.service";
import jwtDecode from "jwt-decode";
import {getErrors} from "../../utility/error-response";

/**
 * Вход
 * @param signInDto
 */
export const accountSignIn = (
    signInDto: SignInDto
) => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.ACCOUNT_SIGN_IN
        })

        const response = await AccountService.signIn(signInDto)

        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch({
            type: AccountActionType.ACCOUNT_SIGN_IN_SUCCESS,
            payload: jwtDecode(response.data.accessToken)
        })

    } catch (error) {

        dispatch({
            type: AccountActionType.ACCOUNT_SIGN_IN_ERROR,
            payload: getErrors(error)
        })

    }

})

/**
 * Обновление токенов
 */
export const accountRefresh = () => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.ACCOUNT_REFRESH
        })

        const response = await AccountService.refresh()

        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch({
            type: AccountActionType.ACCOUNT_REFRESH_SUCCESS,
            payload: jwtDecode(response.data.accessToken)
        })

    } catch (error) {

        dispatch({
            type: AccountActionType.ACCOUNT_REFRESH_ERROR,
            payload: getErrors(error)
        })

    }

})

/**
 * Выход
 */
export const accountSignOut = () => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.ACCOUNT_SIGN_OUT
        })

        await AccountService.signOut()

        localStorage.removeItem('accessToken')
        dispatch({
            type: AccountActionType.ACCOUNT_SIGN_OUT_SUCCESS
        })

    } catch (error) {

        dispatch({
            type: AccountActionType.ACCOUNT_SIGN_OUT_ERROR,
            payload: getErrors(error)
        })

    }

})
