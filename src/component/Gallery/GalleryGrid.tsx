import React, {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, ImageList} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {useAction} from "../../hook/use-action";
import {DateColumn, Photo} from "../../store/photo/photo.type";
import GalleryGridDivider from "./GalleryGridDivider";
import GalleryGridPhoto from "./GalleryGridPhoto";
import {formatDate} from "../../utility/format";

const GalleryGrid: FC = () => {

    const {
        photos, total, years, months, days, dateColumn, orderDirection, limit
    } = useTypedSelector(state => state.photo)

    const {photoSetParams, photoFind, photoFindTotal} = useAction()

    const [isFinish, setIsFinish] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    /**
     * Инициализация:
     * 1. Установка параметров.
     * 2. Поиск количества фотографий.
     * 3. Прокрутка:
     *   3.1. Если конец false.
     *   3.2. Если загрузка false.
     *   3.3. Если необходимая прокрутка.
     *   3.4. Загрузка true.
     */
    useEffect(() => {

        (async () => {

            await photoSetParams({years, months, days, dateColumn, orderDirection, limit: getLimit()})
            await photoFindTotal({years, months, days, dateColumn})

        })()

        const onScroll = () => {

            if (isFinish || isLoading) {
                return
            }

            const {scrollHeight, scrollTop, clientHeight} = document.documentElement

            if (clientHeight < scrollHeight - scrollTop - clientHeight) {
                return
            }

            setIsLoading(true)

        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)

    }, [])

    /**
     * Количество фотографий:
     * 1. Если количество не ноль.
     * 2. Загрузка true.
     */
    useEffect(() => {

        if (total === 0) {
            return
        }

        setIsLoading(true)

    }, [total])

    /**
     * Загрузка:
     * 1. Если загрузка true.
     * 2. Если конец:
     *   2.1. Конец true.
     * 3. Поиск фотографий.
     * 4. Загрузка false.
     */
    useEffect(() => {

        (async () => {

            if (!isLoading) {
                return
            }

            const offset = photos.length

            if (!(limit + offset < total)) {
                setIsFinish(true)
            }

            await photoFind({years, months, days, dateColumn, orderDirection, limit, offset})
            setIsLoading(false)

        })()

    }, [isLoading])

    return (
        <>
            <ImageList
                cols={getCols()}
                sx={{
                    m: 0
                }}
            >
                {withDividers(photos, dateColumn).map((item) => (
                    typeof item === 'string' ? (
                        <GalleryGridDivider
                            key={item}
                            cols={getCols()}
                            title={item}
                        />
                    ) : (
                        <GalleryGridPhoto
                            key={item.id}
                            photo={item}
                        />
                    )
                ))}
            </ImageList>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height={40}
                mt={1}
                mb={9}
            >
                {<CircularProgress/>}
            </Box>
        </>
    )

}

const getCols = (): number => Math.ceil(window.innerWidth / Number(process.env.REACT_APP_PHOTO_THUMBNAIL_WIDTH))

const getLimit = (): number => {

    const cols = getCols()
    const rows = Math.ceil(window.innerHeight / Number(process.env.REACT_APP_PHOTO_THUMBNAIL_HEIGHT))
    const limit = cols * rows * 2
    const max = Number(process.env.REACT_APP_PHOTO_FIND_MAX)

    return limit > max ? max : limit

}

const withDividers = (photos: Photo[], dateColumn: DateColumn): (Photo | string)[] => {

    const items: (Photo | string)[] = []

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

export default GalleryGrid
