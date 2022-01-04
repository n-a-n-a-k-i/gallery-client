import {AxiosResponse} from 'axios'
import {accountApi} from "../../api/account.api";

interface ReqSignIn {
    username: string
    password: string
}

interface ResSignIn {
    accessToken: string
}

interface ResRefresh {
    accessToken: string
}

export default class AccountService {

    static async signIn(username: string, password: string) {
        return accountApi.post<ReqSignIn, AxiosResponse<ResSignIn>>('/account/sign-in', {
            username,
            password
        })
    }

    static async refresh() {
        return accountApi.get<ResRefresh>('/account/refresh')
    }

    static async signOut() {
        return accountApi.get('/account/sign-out' )
    }

}
