import React, {FC, useEffect, useState} from 'react';
import {Box, ImageList, ImageListItem} from "@mui/material";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import Tools from './Tools'
import {OrderColumn, OrderDirection} from "../../type/photo.type";

const Gallery: FC = () => {

    const {
        items, isFinish, years, months, days, orderColumn, orderDirection, limit
    } = useTypedSelector(state => state.photo)

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

            await setPhotoParams([2019], [7], [19], OrderColumn.dateCreate, OrderDirection.DESC, Math.ceil(window.innerWidth / px) * Math.ceil(window.innerHeight / px) * 2)
            console.log('setPhotoParams', 3)
            setFetching(true)

        })()

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)

    }, [])

    useEffect(() => {

        (async () => {

            if (fetching) {

                await fetchPhotos(years, months, days, orderColumn, orderDirection, limit, items.length)
                console.log('fetchPhotos', 3)
                setFetching(false)

            }

        })()

    }, [fetching])

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
            <Tools/>
        </Box>
    )

}

export default Gallery
