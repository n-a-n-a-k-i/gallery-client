import React, {FC} from 'react';
import {Box} from "@mui/material";
import GalleryGrid from "./GalleryGrid";
import GalleryBottom from "./GalleryBottom";
import Preview from "./Preview";
import GalleryTop from "./GalleryTop";
import GalleryLoader from "./GalleryLoader";

const Gallery: FC = () => {

    return (
        <Box>
            <GalleryTop/>
            <GalleryGrid/>
            <GalleryLoader/>
            <GalleryBottom/>
            <Preview/>
        </Box>
    )

}

export default Gallery
