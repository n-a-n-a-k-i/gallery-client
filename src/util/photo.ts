import {OrderColumn, Photo} from "../type/photo.type";
import Format from "./format";

export const addDivider = (items: Photo[], orderColumn: OrderColumn): (Photo | string)[] => {

    const photos: (Photo | string)[] = []

    items.forEach((item, i) => {

        let isDivider = true

        const currentDate = new Date(item[orderColumn])
        const previousItem = items[i - 1]

        if (previousItem) {

            const previousDate = new Date(previousItem[orderColumn])

            isDivider =
                previousDate.getFullYear() !== currentDate.getFullYear()
                || previousDate.getMonth() !== currentDate.getMonth()
                || previousDate.getDate() !== currentDate.getDate()

        }

        if (isDivider) photos.push(Format.date(currentDate, 'd.m.Y'))

        photos.push(item)

    })

    return photos

}