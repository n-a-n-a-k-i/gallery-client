import {OrderColumn, Photo} from "../store/photo/photo.type";
import FormatUtil from "./format.util";

export default class PhotoUtil {

    static addDivider(photos: Photo[], orderColumn: OrderColumn): (Photo | string)[] {

        const items: (Photo | string)[] = []

        photos.forEach((photo, i) => {

            let isDivider = true

            const currentDate = new Date(photo[orderColumn])
            const previousPhoto = photos[i - 1]

            if (previousPhoto) {

                const previousDate = new Date(previousPhoto[orderColumn])

                isDivider =
                    previousDate.getFullYear() !== currentDate.getFullYear()
                    || previousDate.getMonth() !== currentDate.getMonth()
                    || previousDate.getDate() !== currentDate.getDate()

            }

            if (isDivider) items.push(FormatUtil.date(currentDate, 'd.m.Y'))

            items.push(photo)

        })

        return items

    }

}
