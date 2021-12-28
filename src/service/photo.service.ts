import {DateColumn, OrderDirection, Photo} from "../store/photo/photo.type";
import galleryApi from "../api/gallery.api";

export default class PhotoService {

    static fetchAll(
        years: number[],
        months: number[],
        days: number[],
        dateColumn: DateColumn,
        orderDirection: OrderDirection,
        limit: number,
        offset: number
    ) {
        return galleryApi.get<Photo[]>('/photo', {
            params: {
                years: years.length ? years.join(',') : null,
                months: months.length ? months.join(',') : null,
                days: days.length ? days.join(',') : null,
                dateColumn,
                orderDirection,
                limit,
                offset
            }
        })
    }

    static fetchTotal(
        years: number[],
        months: number[],
        days: number[],
        dateColumn: DateColumn
    ) {
        return galleryApi.get<number>('/photo/total', {
            params: {
                years: years.length ? years.join(',') : null,
                months: months.length ? months.join(',') : null,
                days: days.length ? days.join(',') : null,
                dateColumn
            }
        })
    }

    static download(id: string) {
        return galleryApi.get<Blob>(`/photo/download/${id}`, {
            responseType: 'blob'
        })
    }

}
