import {AxiosResponse} from 'axios'
import {accountApi} from "../../api/account.api";
import {AccessTokenDto, SignInDto} from "./account.type";

export default class AccountService {

    /**
     * Вход
     * @param signInDto
     */
    static async signIn(signInDto: SignInDto) {
        return accountApi.post<SignInDto, AxiosResponse<AccessTokenDto>>('/account/sign-in', signInDto)
    }

    /**
     * Обновление токенов
     */
    static async refresh() {
        return accountApi.get<AccessTokenDto>('/account/refresh')
    }

    /**
     * Выход
     */
    static async signOut() {
        return accountApi.get('/account/sign-out' )
    }

}
