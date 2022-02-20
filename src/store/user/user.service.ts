import galleryApi from "../../api/gallery.api";
import {UserDto} from "./user.type";

export default class UserService {

    static find() {
        return galleryApi.get<UserDto[]>('/user')
    }

}
