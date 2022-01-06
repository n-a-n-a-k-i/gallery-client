import {DateColumn, Photo, PhotoFindParams, PhotoFindTotalParams, TotalDate} from "./photo.type";
import galleryApi from "../../api/gallery.api";

export default class PhotoService {

    static find(
        {years, months, days, dateColumn, orderDirection, limit, offset}: PhotoFindParams
    ) {
        return galleryApi.get<Photo[]>('/photo', {
            params: {
                years: years.join(',') || null,
                months: months.join(',') || null,
                days: days.join(',') || null,
                dateColumn,
                orderDirection,
                limit,
                offset
            }
        })
    }

    static download(id: string) {
        return galleryApi.get<Blob>(`/photo/download/${id}`, {
            responseType: 'blob'
        })
    }

    static findTotal(
        {years, months, days, dateColumn}: PhotoFindTotalParams
    ) {
        return galleryApi.get<number>('/photo/total', {
            params: {
                years: years.join(',') || null,
                months: months.join(',') || null,
                days: days.join(',') || null,
                dateColumn
            }
        })
    }

    static findTotalDate(dateColumn: DateColumn) {
        return galleryApi.get<TotalDate>(`/photo/total-date/${dateColumn}`)
    }

}
