import React, {FC} from 'react';
import {Photo} from "../../store/photo/photo.type";
import {ImageListItem} from "@mui/material";
import {useAction} from "../../hook/use-action";

interface PhotoItemProps {
    photo: Photo
}

const GalleryGridPhoto: FC<PhotoItemProps> = ({photo}) => {

    const {photoSetPreview} = useAction()

    return (
        <ImageListItem
            onClick={() => photoSetPreview(photo)}
            sx={{
                cursor: 'zoom-in'
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
