import React, {FC} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import {useAction} from "../../hook/use-action";

interface SettingsProps {
    isOpen: boolean
    onClose: () => void
}

const Settings: FC<SettingsProps> = ({isOpen, onClose}) => {

    const {accountSignOut} = useAction()

    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            maxWidth="xs"
            sx={{
                '& .MuiDialog-paper': {
                    width: '100%'
                }
            }}
        >
            <DialogTitle>
                Настройки
            </DialogTitle>
            <DialogContent
                dividers
                sx={{
                    p: 0
                }}
            >
                <List>
                    <ListItem
                        disablePadding
                    >
                        <ListItemButton
                            onClick={() => accountSignOut()}
                        >
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText
                                primary="Выход"
                                secondary="Покинуть учётную запись"
                            />
                        </ListItemButton>
                    </ListItem>
                </List>
            </DialogContent>
            <DialogActions>
                <Button
                    autoFocus
                    onClick={onClose}
                >
                    Назад
                </Button>
            </DialogActions>
        </Dialog>
    )

}

export default Settings
