import React, {FC} from 'react';
import {Box} from "@mui/material";
import PhotoGrid from "./photo.grid";
import Tools from "./tools";
import Preview from "./preview";
import Header from "./header";

const Gallery: FC = () => {

    return (
        <Box>
            <Header/>
            <PhotoGrid/>
            <Tools/>
            <Preview/>
        </Box>
    )

}

export default Gallery
