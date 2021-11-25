import React, {FC} from 'react';
import {Box} from "@mui/material";
import PhotoGrid from "./photo.grid";
import Tools from "./tools";

const Gallery: FC = () => {

    return (
        <Box>
            <PhotoGrid/>
            <Tools/>
        </Box>
    )

}

export default Gallery
