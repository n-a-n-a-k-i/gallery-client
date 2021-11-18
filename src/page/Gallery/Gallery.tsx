import React, {FC, useEffect, useState} from 'react';
import {Box, CircularProgress, Container, ImageList, ImageListItem, ListSubheader, Typography} from "@mui/material";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import Tools from './Tools'
import {OrderColumn, OrderDirection} from "../../type/photo.type";

const Gallery: FC = () => {

    const {
        items, total, isLoading, error, isFinish, years, months, days, orderColumn, orderDirection, limit
    } = useTypedSelector(state => state.photo)

    console.log('start')
    console.log(items, total, isLoading.toString(), error, isFinish, years, months, days, orderColumn, orderDirection, limit)

    const {fetchPhotos, setPhotoParams} = useAction()
    const [fetching, setFetching] = useState<boolean>(false)
    const px = 256
    const cols = Math.ceil(window.innerWidth / px)
    const rows = Math.ceil(window.innerHeight / px)
    const onScroll = () => {

        console.log(isFinish)

        if (!isFinish) {

            const current = document.documentElement.scrollHeight - document.documentElement.scrollTop - window.innerHeight
            const delta = window.innerHeight / 2

            if (current < delta) setFetching(true)

        }

    }

    useEffect(() => {

        (async () => {

            console.log('setPhotoParams', 'start')
            await setPhotoParams([], [], [], OrderColumn.dateCreate, OrderDirection.DESC, cols * rows * 2)
            // await setPhotoParams([2020], [9], [13], OrderColumn.dateCreate, OrderDirection.DESC, cols * rows * 2)
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

    const numberToString = (x: number, size: number, char: string = '0') => {

        let y = x.toString()

        while (y.length < size) y = char + y

        return y

    }

    return (
        <Box>
            {
                total !== null && (
                    <Container
                        sx={{
                            height: 80,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'right'
                        }}
                    >
                        <Typography variant='h3'>{total} шт</Typography>
                    </Container>
                )
            }
            <ImageList
                cols={cols}
                sx={{
                    m: 0
                }}
            >
                {items.map((item, i) => {

                    let isDivider = true
                    let header = null
                    const lastItem = items[i - 1]
                    const date = new Date(item[orderColumn])
                    const year = date.getFullYear()
                    const month = date.getMonth()
                    const day = date.getDate()

                    if (lastItem) {

                        const lastDate = new Date(lastItem[orderColumn])

                        isDivider = lastDate.getFullYear() !== year
                            || lastDate.getMonth() !== month
                            || lastDate.getDate() !== day

                    }

                    if (isDivider) header = numberToString(day, 2) + '.' + numberToString(month + 1, 2) + '.' + year

                    return (
                        <>
                            {isDivider && (
                                <ImageListItem key={header} cols={cols}>
                                    <ListSubheader>
                                        {header}
                                    </ListSubheader>
                                </ImageListItem>
                            )}
                            <ImageListItem key={item.id}>
                                <img
                                    src={`${process.env.REACT_APP_GALLERY_SERVER_URL}/photo/thumbnail/${item.id}`}
                                    alt={item.id}
                                    loading='lazy'
                                />
                            </ImageListItem>
                        </>
                    )

                })}
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
            <Tools/>
        </Box>
    )

}

export default Gallery
