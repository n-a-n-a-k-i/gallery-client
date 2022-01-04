import React, {FC} from 'react';
import {Fab, Stack} from "@mui/material";
import {useAction} from "../../hook/use-action";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import {useTypedSelector} from "../../hook/use-typed-selector";

const PreviewToolbar: FC = () => {

    const {setPhotoPreview, downloadPhoto} = useAction()
    const {preview} = useTypedSelector(state => state.photo)

    const onDownload = () => {
        if (preview) downloadPhoto(preview.id)
    }

    const onClose = () => {
        setPhotoPreview(null)
    }

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
                onClick={onDownload}
            >
                <DownloadIcon/>
            </Fab>
            <Fab
                onClick={onClose}
            >
                <ArrowBackIcon/>
            </Fab>
        </Stack>
    )

}

export default PreviewToolbar
