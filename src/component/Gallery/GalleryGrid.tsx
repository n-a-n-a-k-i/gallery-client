import React, {FC, useEffect, useState} from 'react';
import {ImageList} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {useAction} from "../../hook/use-action";
import GalleryGridDivider from "./GalleryGridDivider";
import GalleryGridPhoto from "./GalleryGridPhoto";
import {getCols, getLimit, pushDivider} from "../../utility/image-list";

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

            const limit = getLimit()

            await photoSetParams({years, months, days, dateColumn, orderDirection, limit})
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

            // setIsLoading(true)

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
