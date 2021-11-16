import React, {FC, useEffect} from 'react';
import {Box, ImageList, ImageListItem} from "@mui/material";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";
import MenuMain from "./MenuMain";

const Gallery: FC = () => {

    const {
        items,
        isLoading,
        error,
        timeStart,
        limit,
        dateColumn,
        sortDirection
    } = useTypedSelector(state => state.photo)
    const {fetchPhotos, setPhotoLimit} = useAction()

    const cols = Math.ceil(window.innerWidth / 256)

    useEffect(() => {
        setPhotoLimit(Math.ceil(window.innerWidth / 256) * Math.ceil(window.innerHeight / 256) * 2)
    }, [])

    useEffect(() => {
        if (limit > 0) fetchPhotos(timeStart, limit, dateColumn, sortDirection)
    }, [limit])

    if (isLoading) {
        console.log('Загрузка фотографий')
        return <div>Загрузка фотографйи</div>
    }

    if (error) {
        console.log(error)
        return <div>{error}</div>
    }

    if (!items.length) {
        console.log('Нет фотографий')
        return <div>Нет фотографий</div>
    }

    return (
        <Box>
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
            <MenuMain/>
        </Box>
    )

}

export default Gallery