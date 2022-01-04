import React, {FC} from 'react';
import {Stack} from "@mui/material";
import Settings from "./Settings";

const GalleryToolbar: FC = () => {

    return (
        <Stack
            direction="row"
            spacing={1}
            position="fixed"
            right={0}
            bottom={0}
            left={0}
            zIndex={1}
            justifyContent="center"
            pb={1}
            sx={{
                pointerEvents: 'none',
                '& > *': {
                    pointerEvents: 'auto'
                }
            }}
        >
            <Settings/>
        </Stack>
    )

}

export default GalleryToolbar
