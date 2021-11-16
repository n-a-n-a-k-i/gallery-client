import React, {FC, useEffect} from 'react';
import {Box, ImageList, ImageListItem} from "@mui/material";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import Tools from './Tools'

const Gallery: FC = () => {

    const {

        items,
        total,

        isLoading,
        error,

        timeStart,

        limit,
        dateColumn,
        sortDirection,
        years,
        months,
        days

    } = useTypedSelector(state => state.photo)

    const {fetchPhotos, setPhotoQuery} = useAction()

    const cols = Math.ceil(window.innerWidth / 256)

    useEffect(() => {
        const limit = Math.ceil(window.innerWidth / 256) * Math.ceil(window.innerHeight / 256) * 2
        setPhotoQuery(limit, dateColumn, sortDirection, [2019], [7], [19])
        console.log('setPhotoQuery')
    }, [])

    useEffect(() => {
        if (limit) {
            fetchPhotos(timeStart, limit, dateColumn, sortDirection, years, months, days)
            console.log('fetchPhotos')
        }
    }, [limit])

    if (isLoading) {
        console.log('Загрузка фотографий')
        return <div>Загрузка фотографйи</div>
    }

    if (error) {
        console.log(error)
        return (
            <>
                {error.map((e, i) => (
                    <div key={i}>{e}</div>
                ))}
            </>
        )
    }

    if (!items.length) {
        console.log('Нет фотографий')
        return <div>Нет фотографий</div>
    }

    return (
        <Box>
            <div>{years[0]}.{months[0]}.{days[0]} x{total}</div>
            <ImageList cols={cols}>
                {items.map((item) => (
                    <ImageListItem key={item.id}>
                        <img
                            src={`${process.env.REACT_APP_GALLERY_SERVER_URL}/photo/thumbnail/${item.id}`}
                            alt={item.id}
                            loading='lazy'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Tools/>
        </Box>
    )

}

export default Gallery