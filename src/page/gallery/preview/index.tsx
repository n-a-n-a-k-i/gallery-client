import React, {FC, useState} from 'react';
import {Dialog, Typography} from "@mui/material";
import {useTypedSelector} from "../../../hook/use.typed.selector";
import FormatUtil from "../../../util/format.util";
import Tools from "./tools";

const Preview: FC = () => {

    const [clear, setClear] = useState<boolean>(false)
    const {preview} = useTypedSelector(state => state.photo)

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
            {!clear && <Typography
                variant='h5'
                sx={{
                    pt: 2,
                    pl: 2,
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    left: 0
                }}
            >
                {isOpen && FormatUtil.date(FormatUtil.timeZone(preview.dateCreate), 'H:i:s d.m.Y')}
            </Typography>}
            {isOpen && <img
                src={process.env.REACT_APP_GALLERY_SERVER_URL + '/photo/preview/' + preview?.id}
                alt={preview?.id}
                loading='lazy'
                onClick={() => setClear(!clear)}
                style={{
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }}
            />}
            {!clear && <Tools/>}
        </Dialog>
    )

}

export default Preview
