import React, {FC} from 'react';
import {Box} from "@mui/material";
import {useTypedSelector} from "../../hook/use.typed.selector";
import Tools from './tools'
import PhotoGrid from "./photo.grid";
import PhotoTotal from "./photo.total";

const Gallery: FC = () => {

    const {total} = useTypedSelector(state => state.photo)

    return (
        <Box>
            {total !== null && <PhotoTotal total={total}/>}
            <PhotoGrid/>
            <Tools/>
        </Box>
    )

}

export default Gallery
