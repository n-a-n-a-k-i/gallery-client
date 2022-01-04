import React, {FC} from 'react';
import {Box} from "@mui/material";
import GalleryGrid from "./GalleryGrid";
import GalleryToolbar from "./GalleryToolbar";
import Preview from "./Preview";
import GalleryHeader from "./GalleryHeader";

const Gallery: FC = () => {

    return (
        <Box>
            <GalleryHeader/>
            <GalleryGrid/>
            <GalleryToolbar/>
            <Preview/>
        </Box>
    )

}

export default Gallery
