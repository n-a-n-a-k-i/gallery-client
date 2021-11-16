import {DateColumn, Photo, SortDirection} from "../type/photo.type";
import galleryApi from "../api/gallery.api";

export default class PhotoService {

    static fetchPhotos(
        timeStart: number,
        limit: number,
        dateColumn: DateColumn,
        sortDirection: SortDirection,
        years: number[],
        months: number[],
        days: number[]
    ) {
        return galleryApi.get<Photo[]>('/photo', {
            params: {
                timeStart,
                limit,
                dateColumn,
                sortDirection,
                years: years.join(',') || null,
                months: months.join(',') || null,
                days: days.join(',') || null
            }
        })
    }

    static fetchPhotoTotal(
        years: number[],
        months: number[],
        days: number[]
    ) {
        return galleryApi.get<number>('/photo/total', {
            params: {
                years: years.join(',') || null,
                months: months.join(',') || null,
                days: days.join(',') || null
            }
        })
    }

}