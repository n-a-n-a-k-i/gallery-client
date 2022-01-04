import React, {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, ImageList} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {useAction} from "../../hook/use-action";
import {DateColumn, OrderDirection, Photo} from "../../store/photo/photo.type";
import GalleryGridDivider from "./GalleryGridDivider";
import GalleryGridPhoto from "./GalleryGridPhoto";
import {formatDate} from "../../utility/format";

const GalleryGrid: FC = () => {

    const {
        items, isLoading, isFinish, years, months, days, dateColumn, orderDirection, limit
    } = useTypedSelector(state => state.photo)

    const {fetchPhotos, setPhotoParams} = useAction()

    const [fetching, setFetching] = useState<boolean>(false)

    const px = 256
    const cols = Math.ceil(window.innerWidth / px)
    const rows = Math.ceil(window.innerHeight / px)

    const onScroll = () => {

        if (!isFinish) {

            const {scrollHeight, scrollTop} = document.documentElement
            const current = scrollHeight - scrollTop - window.innerHeight
            const delta = window.innerHeight / 2

            if (current < delta) setFetching(true)

        }

    }

    useEffect(() => {

        (async () => {

            await setPhotoParams(
                [],
                [],
                [],
                DateColumn.date,
                OrderDirection.DESC,
                cols * rows * 2
            )
            setFetching(true)

        })()

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)

    }, [])

    useEffect(() => {

        (async () => {

            if (fetching) {

                await fetchPhotos(years, months, days, dateColumn, orderDirection, limit, items.length)
                setFetching(false)

            }

        })()

    }, [fetching])

    return (
        <>
            <ImageList
                cols={cols}
                sx={{
                    m: 0
                }}
            >
                {withDividers(items, dateColumn).map((item) => (
                    typeof item === 'string' ? (
                        <GalleryGridDivider
                            key={item}
                            cols={cols}
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
                {isLoading && <CircularProgress/>}
            </Box>
        </>
    )

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
