import {DateColumn, Photo, SortDirection} from "../type/photo.type";
import galleryApi from "../api/gallery.api";

export default class PhotoService {

    static async fetchPhotos(
        timeStart: number,
        limit: number,
        dateColumn: DateColumn,
        sortDirection: SortDirection
    ) {
        return galleryApi.get<Photo[]>('/photo', {
            params: {
                timeStart,
                limit,
                dateColumn,
                sortDirection
            }
        })
    }

}