import React, {FC} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useTypedSelector} from "../../../hook/use.typed.selector";
import {useAction} from "../../../hook/use.action";
import Format from "../../../util/format";

const Preview: FC = () => {

    const {setPhotoPreview} = useAction()

    const {preview} = useTypedSelector(state => state.photo)

    const isOpen = !!preview

    return (
        <Dialog
            open={isOpen}
            fullScreen={true}
        >
            <DialogTitle>
                {isOpen && Format.date(Format.timeZone(preview.dateCreate), 'H:i:s d.m.Y')}
            </DialogTitle>
            <DialogContent
                dividers
                sx={{
                    p: 0,
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                {isOpen && <img
                    src={process.env.REACT_APP_GALLERY_SERVER_URL + '/photo/preview/' + preview.id}
                    alt={preview?.id}
                    loading='lazy'
                    style={{
                        maxWidth: '100%',
                        maxHeight: '100%'
                    }}
                />}
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={() => setPhotoPreview(null)}
                >
                    Назад
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Preview
