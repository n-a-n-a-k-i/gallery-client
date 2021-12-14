enum FormatUtilType {
    YEAR = 'Y',
    MONTH = 'm',
    DAY = 'd',
    HOURS = 'H',
    MINUTES = 'i',
    SECONDS = 's'
}

export default class FormatUtil {

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

    static date(date: Date | string = new Date(), format: string = 'Y.m.d H:i:s'): string {

        const {YEAR, MONTH, DAY, HOURS, MINUTES, SECONDS} = FormatUtilType

        if (typeof date === 'string') {
            date = new Date(date)
        }

        if (format.indexOf(YEAR) > -1) {
            const year = date.getFullYear().toString()
            format = format.split(YEAR).join(year)
        }

        if (format.indexOf(MONTH) > -1) {
            const month = this.numberToString(date.getMonth() + 1, 2)
            format = format.split(MONTH).join(month)
        }

        if (format.indexOf(DAY) > -1) {
            const day = this.numberToString(date.getDate(), 2)
            format = format.split(DAY).join(day)
        }

        if (format.indexOf(HOURS) > -1) {
            const hours = this.numberToString(date.getHours(), 2)
            format = format.split(HOURS).join(hours)
        }

        if (format.indexOf(MINUTES) > -1) {
            const minutes = this.numberToString(date.getMinutes(), 2)
            format = format.split(MINUTES).join(minutes)
        }

        if (format.indexOf(SECONDS) > -1) {
            const seconds = this.numberToString(date.getSeconds(), 2)
            format = format.split(SECONDS).join(seconds)
        }

        return format

    }

}
