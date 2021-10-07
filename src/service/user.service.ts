import api from "../http";
import {User} from "../interface/user.interface";
import {AxiosResponse} from "axios";

export default class UserService {

    static async findAll(): Promise<AxiosResponse<User[]>> {
        return api.get<void, AxiosResponse<User[]>>('/user')
    }

}