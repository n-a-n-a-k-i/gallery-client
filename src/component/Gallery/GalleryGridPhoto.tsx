import React, {FC} from 'react';
import {Photo} from "../../store/photo/photo.type";
import {ImageListItem} from "@mui/material";
import {useAction} from "../../hook/use-action";

interface PhotoItemProps {
    photo: Photo
}

const GalleryGridPhoto: FC<PhotoItemProps> = ({photo}) => {

    const {setPhotoPreview} = useAction()

    return (
        <ImageListItem
            onClick={() => setPhotoPreview(photo)}
            sx={{
                cursor: 'zoom-in'
            }}
        >
            <img
                src={process.env.REACT_APP_GALLERY_SERVER_URL + '/photo/thumbnail/' + photo.id}
                alt={photo.id}
                loading="lazy"
            />
        </ImageListItem>
    )

}

export default GalleryGridPhoto
