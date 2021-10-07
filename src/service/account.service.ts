import api from "../http";
import {AxiosResponse} from 'axios'
import {AccountSignInResponse} from "../interface/account.sign.in.response.interface";
import {AccountSignInRequest} from "../interface/account.sign.in.request.interface";

export default class AccountService {

    static async signIn(data: AccountSignInRequest): Promise<AxiosResponse<AccountSignInResponse>> {
        return api.post<AccountSignInRequest, AxiosResponse<AccountSignInResponse>>('/sign-in', data)
    }

    static async signOut(): Promise<AxiosResponse<void>> {
        return api.get<void, AxiosResponse<void>>('/sign-out')
    }

}