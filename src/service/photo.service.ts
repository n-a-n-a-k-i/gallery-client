import {OrderColumn, OrderDirection, Photo} from "../type/photo.type";
import galleryApi from "../api/gallery.api";

export default class PhotoService {

    static fetchAll(
        years: number[],
        months: number[],
        days: number[],
        orderColumn: OrderColumn,
        orderDirection: OrderDirection,
        limit: number,
        offset: number
    ) {
        return galleryApi.get<Photo[]>('/photo', {
            params: {
                years: years.length ? years.join(',') : null,
                months: months.length ? months.join(',') : null,
                days: days.length ? days.join(',') : null,
                orderColumn,
                orderDirection,
                limit,
                offset
            }
        })
    }

    static fetchTotal(
        years: number[],
        months: number[],
        days: number[]
    ) {
        return galleryApi.get<number>('/photo/total', {
            params: {
                years: years.length ? years.join(',') : null,
                months: months.length ? months.join(',') : null,
                days: days.length ? days.join(',') : null
            }
        })
    }

}
