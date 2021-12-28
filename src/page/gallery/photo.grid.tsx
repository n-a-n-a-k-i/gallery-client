import React, {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, ImageList} from "@mui/material";
import {useTypedSelector} from "../../hook/use.typed.selector";
import {useAction} from "../../hook/use.action";
import {DateColumn, OrderDirection} from "../../store/photo/photo.type";
import PhotoDivider from "./photo.divider";
import PhotoItem from "./photo.item";
import PhotoUtil from '../../util/photo.util';

const PhotoGrid: FC = () => {

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
                {PhotoUtil.addDivider(items, dateColumn).map((item) =>
                    typeof item === 'string'
                    ? <PhotoDivider key={item} cols={cols} title={item}/>
                    : <PhotoItem key={item.id} photo={item}/>
                )}
            </ImageList>
            <Box
                sx={{
                    height: 40,
                    mt: 1,
                    mb: 9,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {isLoading && <CircularProgress/>}
            </Box>
        </>
    )

}

export default PhotoGrid
