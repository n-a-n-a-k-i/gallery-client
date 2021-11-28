import React, {FC} from 'react';
import {Box} from "@mui/material";
import PhotoGrid from "./photo.grid";
import Tools from "./tools";
import Preview from "./preview";

const Gallery: FC = () => {

    return (
        <Box>
            <PhotoGrid/>
            <Tools/>
            <Preview/>
        </Box>
    )

}

export default Gallery
