import React, {FC} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";
import {formatUnit} from "../../utility/format";
import {useAction} from "../../hook/use-action";

interface DeleteProps {
    isOpen: boolean
    onClose: () => void
}

const Delete: FC<DeleteProps> = ({isOpen, onClose}) => {

    const {photos, preview} = useTypedSelector(state => state.photo)
    const {photoRemove, photoSetPreview} = useAction()
    const ids: string[] = []

    if (preview !== -1) ids.push(photos[preview].id)

    const unit = formatUnit(ids.length, 'фотографию', 'фотографии', 'фотографий')

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle>
                Удаление
            </DialogTitle>
            <DialogContent
                dividers
            >
                Вы действительно хотите удалить {ids.length} {unit} из Галереи?
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                >
                    Отмена
                </Button>
                <Button
                    autoFocus
                    color="error"
                    onClick={async () => {

                        if (preview !== -1) {
                            photoSetPreview(-1)
                        }

                        for (let i = 0; i < ids.length; i++) {
                            await photoRemove(ids[i])
                        }

                    }}
                >
                    Удалить
                </Button>
            </DialogActions>
        </Dialog>
    )

}

export default Delete
