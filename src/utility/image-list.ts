import {DateColumn, PhotoDto} from "../store/photo/photo.type";
import {formatDate} from "./format";

export const getCols = (): number => {

    const width = Number(process.env.REACT_APP_PHOTO_THUMBNAIL_WIDTH)

    return Math.ceil(window.innerWidth / width)

}

export const getRows = (): number => {

    const height = Number(process.env.REACT_APP_PHOTO_THUMBNAIL_HEIGHT)

    return Math.ceil(window.innerHeight / height)

}

export const getLimit = (): number => {

    const cols = getCols()
    const rows = getRows()
    const limit = cols * rows * 2
    const max = Number(process.env.REACT_APP_PHOTO_FIND_MAX)

    return limit > max ? max : limit

}

export const pushDivider = (photos: PhotoDto[], dateColumn: DateColumn): (PhotoDto | string)[] => {

    const items: (PhotoDto | string)[] = []

    photos.forEach((photo, i) => {

        let isDivider = true

        const currentDate = new Date(photo[dateColumn])
        const previousPhoto = photos[i - 1]

        if (previousPhoto) {

            const previousDate = new Date(previousPhoto[dateColumn])

            isDivider =
                previousDate.getFullYear() !== currentDate.getFullYear()
                || previousDate.getMonth() !== currentDate.getMonth()
                || previousDate.getDate() !== currentDate.getDate()

        }

        if (isDivider) items.push(formatDate(currentDate, 'd.m.Y'))

        items.push(photo)

    })

    return items

}
