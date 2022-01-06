import React, {FC} from 'react';
import {Box, CircularProgress} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";

const GalleryLoader: FC = () => {

    const {isFind} = useTypedSelector(state => state.photo)

    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height={100}
            mt={2}
            mb={8}
        >
            {isFind && <CircularProgress/>}
        </Box>
    )

}

export default GalleryLoader
