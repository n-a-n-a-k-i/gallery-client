import React, {FC} from 'react';
import {Photo} from "../../type/photo.type";
import {ImageListItem} from "@mui/material";

interface PhotoItemProps {
    photo: Photo
}

const PhotoItem: FC<PhotoItemProps> = ({photo}) => {

    return (
        <ImageListItem>
            <img
                src={process.env.REACT_APP_GALLERY_SERVER_URL + '/photo/thumbnail/' + photo.id}
                alt={photo.id}
                loading='lazy'
            />
        </ImageListItem>
    )

}

export default PhotoItem
