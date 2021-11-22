import {OrderColumn, Photo} from "../type/photo.type";
import {format} from "./format";

export const addDivider = (items: Photo[], orderColumn: OrderColumn): (Photo | string)[] => {

    const photos: (Photo | string)[] = []

    items.forEach((item, i) => {

        let isDivider = true

        const date = new Date(item[orderColumn])
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()

        const previous = items[i - 1]

        if (previous) {

            const date = new Date(previous[orderColumn])

            isDivider = date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day

        }

        if (isDivider) photos.push(
            format(day, 2) + '.' + format(month + 1, 2) + '.' + year
        )

        photos.push(item)

    })

    return photos

}