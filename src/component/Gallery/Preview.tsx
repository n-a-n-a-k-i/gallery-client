import React, {FC, useState} from 'react';
import {Dialog, Typography} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {formatDate} from "../../utility/format";
import PreviewToolbar from "./PreviewToolbar";

const Preview: FC = () => {

    const {photos, preview, dateColumn} = useTypedSelector(state => state.photo)
    const [isClear, setIsClear] = useState<boolean>(false)

    const photo = photos[preview]

    if (!photo) {
        return null;
    }

    return (
        <Dialog
            open={!!photo}
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
                    {formatDate(photo[dateColumn], 'Y.m.d H:i:s')}
                </Typography>
            )}
            <img
                src={process.env.REACT_APP_SERVER_URL + '/photo/preview/' + photo.id}
                alt=""
                loading="lazy"
                onClick={() => setIsClear(!isClear)}
                style={{
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                }}
            />
            {!isClear && <PreviewToolbar/>}
        </Dialog>
    )

}

export default Preview
