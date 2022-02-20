import {DateColumn, PhotoDto, PhotoFindParams, PhotoFindTotalParams, TotalDateDto} from "./photo.type";
import galleryApi from "../../api/gallery.api";

export default class PhotoService {

    /**
     * Поиск фотографий
     * @param years
     * @param months
     * @param days
     * @param dateColumn
     * @param orderDirection
     * @param limit
     * @param offset
     */
    static find(
        {years, months, days, dateColumn, orderDirection, limit, offset}: PhotoFindParams
    ) {
        return galleryApi.get<PhotoDto[]>('/photo', {
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

    /**
     * Удаление фотографии
     * @param id
     */
    static remove(id: string) {
        return galleryApi.delete<void>(`/photo/${id}`)
    }

    /**
     * Скачивание фотографии
     * @param id
     */
    static download(id: string) {
        return galleryApi.get<Blob>(`/photo/download/${id}`, {
            responseType: 'blob'
        })
    }

    /**
     * Поиск количества фотографий
     * @param years
     * @param months
     * @param days
     * @param dateColumn
     */
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

    /**
     * Поиск количества фотографий по частям даты
     * @param dateColumn
     */
    static findTotalDate(dateColumn: DateColumn) {
        return galleryApi.get<TotalDateDto>(`/photo/total-date/${dateColumn}`)
    }

}
