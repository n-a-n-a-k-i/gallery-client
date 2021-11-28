import React from 'react';
import {Fab, Stack} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useAction} from "../../../hook/use.action";

const Tools = () => {

    const {setPhotoPreview} = useAction()

    return (
        <Stack
            direction='row'
            justifyContent='center'
            spacing={1}
            sx={{
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
            <Fab
                onClick={() => setPhotoPreview(null)}
            >
                <ArrowBackIcon/>
            </Fab>
        </Stack>
    )

}

export default Tools
