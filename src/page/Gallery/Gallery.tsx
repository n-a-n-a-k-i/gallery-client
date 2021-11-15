import React, {FC, useEffect} from 'react';
import {Box, ImageList, ImageListItem} from "@mui/material";
import MainMenu from "./MainMenu";
import {useAction} from "../../hook/useAction";
import {useTypedSelector} from "../../hook/useTypedSelector";

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
    const {fetchPhotos} = useAction()

    useEffect(() => {
        fetchPhotos(timeStart, limit, dateColumn, sortDirection)
    }, [])

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
            <ImageList sx={{ width: 500, height: 450 }} cols={5} rowHeight={100}>
                {items.map((item) => {
                    <ImageListItem key={item.id}>
                        <img
                            src={`${process.env.REACT_APP_GALLERY_SERVER_URL}/photo/thumbnail/${item.id}`}
                            alt={item.id}
                            loading='lazy'
                        />
                    </ImageListItem>
                })}
            </ImageList>
            <MainMenu/>
        </Box>
    )

}

export default Gallery