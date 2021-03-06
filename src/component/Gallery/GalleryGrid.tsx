import React, {FC, useEffect, useState} from 'react';
import {ImageList} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {useAction} from "../../hook/use-action";
import GalleryGridDivider from "./GalleryGridDivider";
import GalleryGridPhoto from "./GalleryGridPhoto";
import {getCols, getLimit, pushDivider} from "../../utility/image-list";

const GalleryGrid: FC = () => {

    const {
        photos, total, years, months, days, dateColumn, orderDirection, limit,
        isFindTotal
    } = useTypedSelector(state => state.photo)

    const {photoSetParams, photoFind, photoFindTotal} = useAction()
    const [isFinding, setIsFinding] = useState<boolean>(false)

    /**
     * Инициализация:
     * 1. Установка параметров.
     * 2. Поиск количества фотографий.
     * 3. Поиск количества фотографий по частям даты.
     * 4. Прокрутка:
     *   4.1. Если конец false.
     *   4.2. Если загрузка false.
     *   4.3. Если необходимая прокрутка.
     *   4.4. Загрузка true.
     */
    useEffect(() => {

        (async () => {

            const limit = getLimit()

            photoSetParams({years, months, days, dateColumn, orderDirection, limit})
            await photoFindTotal({years, months, days, dateColumn})

        })()

        const onScroll = () => {

            const {scrollHeight, scrollTop, clientHeight} = document.documentElement

            if (clientHeight < scrollHeight - scrollTop - clientHeight) {
                return
            }

            setIsFinding(true)

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

        if (isFindTotal || !(photos.length < total)) {
            return
        }

        setIsFinding(true)

    }, [isFindTotal])

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

            if (!isFinding) {
                return
            }

            if (photos.length < total) {
                await photoFind({
                    years, months, days, dateColumn, orderDirection, limit, offset: photos.length
                })
            }

            setIsFinding(false)

        })()

    }, [isFinding])

    return (
        <ImageList
            cols={getCols()}
            sx={{
                m: 0
            }}
        >
            {pushDivider(photos, dateColumn).map((item) => (
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
    )

}

export default GalleryGrid
