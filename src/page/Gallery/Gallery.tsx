import React, {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, ImageList, ImageListItem} from "@mui/material";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import Tools from './Tools'
import {OrderColumn, OrderDirection} from "../../type/photo.type";

const Gallery: FC = () => {

    const {
        items, total, isLoading, error, isFinish, years, months, days, orderColumn, orderDirection, limit
    } = useTypedSelector(state => state.photo)

    console.log('start')
    console.log(items, total.toString(), isLoading.toString(), error, isFinish, years, months, days, orderColumn, orderDirection, limit)

    const {fetchPhotos, setPhotoParams} = useAction()
    const [fetching, setFetching] = useState<boolean>(false)
    const px = 256
    const onScroll = () => {

        if (!isFinish) {

            const current = document.documentElement.scrollHeight - document.documentElement.scrollTop - window.innerHeight
            const delta = window.innerHeight / 2

            if (current < delta) setFetching(true)

        }

    }

    useEffect(() => {

        (async () => {

            console.log('setPhotoParams', 'start')
            await setPhotoParams([2019], [7], [19], OrderColumn.dateCreate, OrderDirection.DESC, Math.ceil(window.innerWidth / px) * Math.ceil(window.innerHeight / px) * 2)
            console.log('setPhotoParams', 'finish')
            setFetching(true)

        })()

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)

    }, [])

    useEffect(() => {

        (async () => {

            if (fetching) {

                console.log('fetchPhotos', 'start')
                await fetchPhotos(years, months, days, orderColumn, orderDirection, limit, items.length)
                console.log('fetchPhotos', 'finish')
                setFetching(false)

            }

        })()

    }, [fetching])

    console.log('finish', fetching.toString())

    return (
        <Box>
            <ImageList cols={Math.ceil(window.innerWidth / px)}>
                {items.map((item) =>
                    <ImageListItem key={item.id}>
                        <img
                            src={`${process.env.REACT_APP_GALLERY_SERVER_URL}/photo/thumbnail/${item.id}`}
                            alt={item.id}
                            loading='lazy'
                        />
                    </ImageListItem>
                )}
            </ImageList>
            <Box sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <CircularProgress/>
            </Box>
            <Tools/>
        </Box>
    )

}

export default Gallery
