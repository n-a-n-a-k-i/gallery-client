import React, {FC, useState} from 'react';
import {Dialog, Typography} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {formatDate} from "../../utility/format";
import PreviewToolbar from "./PreviewToolbar";

const Preview: FC = () => {

    const [isClear, setIsClear] = useState<boolean>(false)
    const {preview, dateColumn} = useTypedSelector(state => state.photo)

    const isOpen = !!preview

    return (
        <Dialog
            open={isOpen}
            fullScreen
            sx={{
                '& .MuiDialog-paper': {
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }}
        >
            {!isClear && (
                <Typography
                    variant="h6"
                    position="fixed"
                    top={0}
                    right={0}
                    left={0}
                    pt={2}
                    pl={2}
                >
                    {isOpen && formatDate(preview[dateColumn], 'H:i:s d.m.Y')}
                </Typography>
            )}
            {isOpen && (
                <img
                    src={process.env.REACT_APP_GALLERY_SERVER_URL + '/photo/preview/' + preview?.id}
                    alt={preview?.id}
                    loading="lazy"
                    onClick={() => setIsClear(!isClear)}
                    style={{
                        cursor: 'pointer',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                    }}
                />
            )}
            {!isClear && <PreviewToolbar/>}
        </Dialog>
    )

}

export default Preview
