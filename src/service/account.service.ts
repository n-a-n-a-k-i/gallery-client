import {AxiosResponse} from 'axios'
import {AccountRequestSignIn, AccountResponseRefresh, AccountResponseSignIn} from "../type/account.type";
import {accountApi} from "../api/account.api";

export default class AccountService {

    static async signIn(username: string, password: string) {
        return accountApi.post<AccountRequestSignIn, AxiosResponse<AccountResponseSignIn>>('/account/sign-in', {
            username,
            password
        })
    }

    static async refresh() {
        return accountApi.get<AccountResponseRefresh>('/account/refresh')
    }

    static async signOut() {
        return accountApi.get('/account/sign-out' )
    }

}
