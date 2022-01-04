import React, {FC} from 'react';
import {ImageListItem, ListSubheader} from "@mui/material";

interface PhotoDividerProps {
    cols: number
    title: string
}

const GalleryGridDivider: FC<PhotoDividerProps> = ({cols, title}) => {

    return (
        <ImageListItem
            cols={cols}
        >
            <ListSubheader
                component="div"
            >
                {title}
            </ListSubheader>
        </ImageListItem>
    )

}

export default GalleryGridDivider
