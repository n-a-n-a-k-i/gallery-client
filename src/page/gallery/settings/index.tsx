import React, {FC, useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions, DialogContent,
    DialogTitle, Fab, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
    useMediaQuery,
    useTheme
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from "@mui/icons-material/Logout";
import {useAction} from "../../../hook/use.action";

const Settings: FC = () => {

    const {signOut} = useAction()

    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

    const onOpen = () => setOpen(true)
    const onClose = () => setOpen(false)

    return (
        <>
            <Fab
                onClick={onOpen}
            >
                <SettingsIcon/>
            </Fab>
            <Dialog
                open={open}
                onClose={onClose}
                fullScreen={fullScreen}
                maxWidth='xs'
                sx={{
                    '& .MuiDialog-paper': {
                        width: '100%'
                    }
                }}
            >
                <DialogTitle>Настройки</DialogTitle>
                <DialogContent
                    dividers
                    sx={{
                        p: 0
                    }}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => signOut()}>
                                <ListItemIcon>
                                    <LogoutIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Выход' secondary='Покинуть учётную запись'/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onClose}>Назад</Button>
                </DialogActions>
            </Dialog>
        </>
    )

}

export default Settings