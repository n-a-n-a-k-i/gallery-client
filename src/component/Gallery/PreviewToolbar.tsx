import React, {FC} from 'react';
import {Fab, Stack} from "@mui/material";
import {useAction} from "../../hook/use-action";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useTypedSelector} from "../../hook/use-typed-selector";

const PreviewToolbar: FC = () => {

    const {photoSetPreview, photoDownload} = useAction()
    const {photos, preview} = useTypedSelector(state => state.photo)

    return (
        <Stack
            direction="row"
            spacing={1}
            position="fixed"
            right={0}
            bottom={0}
            left={0}
            justifyContent="center"
            pb={1}
            sx={{
                pointerEvents: 'none',
                '& > *': {
                    pointerEvents: 'auto'
                }
            }}
        >
            <Fab
                disabled={preview === 0}
                onClick={() => photoSetPreview(preview - 1)}
            >
                <ArrowBackIcon/>
            </Fab>
            <Fab
                onClick={() => photoDownload(photos[preview].id)}
            >
                <DownloadIcon/>
            </Fab>
            <Fab
                onClick={() => photoSetPreview(-1)}
            >
                <CloseIcon/>
            </Fab>
            <Fab
                disabled={preview === photos.length - 1}
                onClick={() => photoSetPreview(preview + 1)}
            >
                <ArrowForwardIcon/>
            </Fab>
        </Stack>
    )

}

export default PreviewToolbar
