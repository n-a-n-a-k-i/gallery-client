import React, {FC, useEffect} from 'react';
import {CircularProgress, Fab, Stack} from "@mui/material";
import {useAction} from "../../hook/use-action";
import {useTypedSelector} from "../../hook/use-typed-selector";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DownloadIcon from '@mui/icons-material/Download';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteOpen from "./DeleteOpen";
import {Permission} from "../../store/permission/permission.type";

const PreviewBottom: FC = () => {

    const {user} = useTypedSelector(state => state.account)
    const {
        photos, total, isFind, preview, years, months, days, dateColumn, orderDirection, limit
    } = useTypedSelector(state => state.photo)
    const {photoSetPreview, photoDownload, photoFind} = useAction()

    useEffect(() => {

        (async () => {

            if (isFind) {
                return
            }

            if (!(photos.length < total)) {
                return
            }

            if (preview < photos.length - 1) {
                return
            }

            await photoFind({
                years, months, days, dateColumn, orderDirection, limit, offset: photos.length
            })

        })()

    }, [preview])

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
            {user?.permissions.includes(Permission.PHOTO_REMOVE) && <DeleteOpen/>}
            <Fab
                sx={{
                    bgcolor: 'success.main',
                    '&:hover': {
                        bgcolor: 'success.dark'
                    }
                }}
                onClick={() => photoDownload(photos[preview].id)}
            >
                <DownloadIcon/>
            </Fab>
            <Fab
                color={"primary"}
                onClick={() => photoSetPreview(-1)}
            >
                <CloseIcon/>
            </Fab>
            <Fab
                disabled={preview === photos.length - 1}
                onClick={() => photoSetPreview(preview + 1)}
            >
                {isFind
                    ? <CircularProgress/>
                    : <ArrowForwardIcon/>
                }
            </Fab>
        </Stack>
    )

}

export default PreviewBottom
