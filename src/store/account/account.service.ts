import {AxiosResponse} from 'axios'
import {accountApi} from "../../api/account.api";
import {AccountAccessToken, AccountSignIn} from "./account.type";

export default class AccountService {

    /**
     * Вход
     * @param accountSignIn
     */
    static async signIn(accountSignIn: AccountSignIn) {
        return accountApi.post<AccountSignIn, AxiosResponse<AccountAccessToken>>('/account/sign-in', accountSignIn)
    }

    /**
     * Обновление токенов
     */
    static async refresh() {
        return accountApi.get<AccountAccessToken>('/account/refresh')
    }

    /**
     * Выход
     */
    static async signOut() {
        return accountApi.get('/account/sign-out' )
    }

}
