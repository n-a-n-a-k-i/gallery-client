import {Dispatch} from "redux";
import {AccountAction, AccountActionType} from "./account.type";
import AccountService from "./account.service";
import jwtDecode from "jwt-decode";

export const signIn = (username: string, password: string) => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.SIGN_IN
        })

        const response = await AccountService.signIn(username, password)

        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch({
            type: AccountActionType.SIGN_IN_SUCCESS,
            payload: jwtDecode(response.data.accessToken)
        })

    } catch (error: any) {

        dispatch({
            type: AccountActionType.SIGN_IN_ERROR,
            payload: [error.response.data.message]
        })

    }

})

export const refresh = () => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.REFRESH
        })

        const response = await AccountService.refresh()

        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch({
            type: AccountActionType.REFRESH_SUCCESS,
            payload: jwtDecode(response.data.accessToken)
        })

    } catch (error: any) {

        dispatch({
            type: AccountActionType.REFRESH_ERROR,
            payload: [error.response.data.message]
        })

    }

})

export const signOut = () => (async (dispatch: Dispatch<AccountAction>) => {

    try {

        dispatch({
            type: AccountActionType.SIGN_OUT
        })

        await AccountService.signOut()

        dispatch({
            type: AccountActionType.SIGN_OUT_SUCCESS
        })

    } catch (error: any) {

        dispatch({
            type: AccountActionType.SIGN_OUT_ERROR,
            payload: [error.response.data.message]
        })

    }

})
