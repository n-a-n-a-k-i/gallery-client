import {Photo} from "../type/photo.type";

enum FormatType {
    YEAR = 'Y',
    MONTH = 'm',
    DAY = 'd',
    HOURS = 'H',
    MINUTES = 'i',
    SECONDS = 's'
}

export default class Format {

    static numberToString(number: number, size: number, char: string = '0'): string {

        let result = number.toString()

        while (result.length < size) result = char + result

        return result

    }

    static timeZone(date: Date | string): Date {

        if (typeof date === 'string') {
            date = new Date(date)
        }

        return new Date(date.getTime() + (date.getTimezoneOffset() * 60 * 1000))

    }

    static getFileName(photo: Photo): string {

        const date = this.timeZone(photo.dateCreate)

        const year = date.getFullYear().toString()
        const month = this.numberToString(date.getMonth() + 1, 2)
        const day = this.numberToString(date.getDate(), 2)
        const hours = this.numberToString(date.getHours(), 2)
        const minutes = this.numberToString(date.getMinutes(), 2)
        const seconds = this.numberToString(date.getSeconds(), 2)

        return `${year}-${month}-${day} ${hours}-${minutes}-${seconds} ${photo.id}.jpg`

    }

    static date(date: Date | string = new Date(), format: string = 'Y.m.d H:i:s'): string {

        if (typeof date === 'string') {
            date = new Date(date)
        }

        if (format.indexOf(FormatType.YEAR) > -1) {
            const year = date.getFullYear().toString()
            format = format.split(FormatType.YEAR).join(year)
        }

        if (format.indexOf(FormatType.MONTH) > -1) {
            const month = this.numberToString(date.getMonth() + 1, 2)
            format = format.split(FormatType.MONTH).join(month)
        }

        if (format.indexOf(FormatType.DAY) > -1) {
            const day = this.numberToString(date.getDate(), 2)
            format = format.split(FormatType.DAY).join(day)
        }

        if (format.indexOf(FormatType.HOURS) > -1) {
            const hours = this.numberToString(date.getHours(), 2)
            format = format.split(FormatType.HOURS).join(hours)
        }

        if (format.indexOf(FormatType.MINUTES) > -1) {
            const minutes = this.numberToString(date.getMinutes(), 2)
            format = format.split(FormatType.MINUTES).join(minutes)
        }

        if (format.indexOf(FormatType.SECONDS) > -1) {
            const seconds = this.numberToString(date.getSeconds(), 2)
            format = format.split(FormatType.SECONDS).join(seconds)
        }

        return format

    }

}
