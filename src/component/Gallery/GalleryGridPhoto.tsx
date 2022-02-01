import React, {FC} from 'react';
import {Photo} from "../../store/photo/photo.type";
import {ImageListItem} from "@mui/material";
import {useAction} from "../../hook/use-action";
import {useTypedSelector} from "../../hook/use-typed-selector";

interface PhotoItemProps {
    photo: Photo
}

const GalleryGridPhoto: FC<PhotoItemProps> = ({photo}) => {

    const {photos} = useTypedSelector(state => state.photo)
    const {photoSetPreview} = useAction()

    return (
        <ImageListItem
            onClick={() => photoSetPreview(photos.indexOf(photo))}
            sx={{
                cursor: 'pointer'
            }}
        >
            <img
                src={`${process.env.REACT_APP_SERVER_URL}/photo/thumbnail/${photo.id}`}
                alt=""
                loading="lazy"
            />
        </ImageListItem>
    )

}

export default GalleryGridPhoto
