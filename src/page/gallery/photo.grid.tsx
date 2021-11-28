import React, {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, ImageList, Typography} from "@mui/material";
import {useTypedSelector} from "../../hook/use.typed.selector";
import {useAction} from "../../hook/use.action";
import {OrderColumn, OrderDirection} from "../../type/photo.type";
import PhotoDivider from "./photo.divider";
import PhotoItem from "./photo.item";
import {addDivider} from "../../util/photo";

const PhotoGrid: FC = () => {

    const {
        items, total, isLoading, isFinish, years, months, days, orderColumn, orderDirection, limit
    } = useTypedSelector(state => state.photo)

    const {fetchPhotos, setPhotoParams} = useAction()

    const [fetching, setFetching] = useState<boolean>(false)

    const px = 256
    const cols = Math.ceil(window.innerWidth / px)
    const rows = Math.ceil(window.innerHeight / px)

    const onScroll = () => {

        if (!isFinish) {

            const current = document.documentElement.scrollHeight - document.documentElement.scrollTop - window.innerHeight
            const delta = window.innerHeight / 2

            if (current < delta) setFetching(true)

        }

    }

    useEffect(() => {

        (async () => {

            await setPhotoParams([], [], [], OrderColumn.dateCreate, OrderDirection.DESC, cols * rows * 2)
            setFetching(true)

        })()

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)

    }, [])

    useEffect(() => {

        (async () => {

            if (fetching) {

                await fetchPhotos(years, months, days, orderColumn, orderDirection, limit, items.length)
                setFetching(false)

            }

        })()

    }, [fetching])

    return (
        <>
            {total !== null && (
                <Typography
                    variant='h5'
                    sx={{
                        py: 2,
                        pr: 2,
                        textAlign: 'right'
                    }}
                >
                    {total} шт
                </Typography>
            )}
            <ImageList
                cols={cols}
                sx={{
                    m: 0
                }}
            >
                {addDivider(items, orderColumn).map((photo) =>
                    typeof photo === 'string'
                    ? <PhotoDivider key={photo} cols={cols} title={photo}/>
                    : <PhotoItem key={photo.id} photo={photo}/>
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
    );
};

export default PhotoGrid;