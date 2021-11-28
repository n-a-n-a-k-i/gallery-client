import React, {FC} from 'react';
import {Stack} from "@mui/material";
import Settings from "./settings";

const Tools: FC = () => {

    return (
        <Stack
            direction='row'
            justifyContent='center'
            spacing={1}
            sx={{
                zIndex: 1,
                pb: 1,
                position: 'fixed',
                right: 0,
                bottom: 0,
                left: 0,
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

export default Tools
