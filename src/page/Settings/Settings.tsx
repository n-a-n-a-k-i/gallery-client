import React from 'react';
import {
    Box,
    Card,
    Container,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, Typography
} from "@mui/material";
import {useAction} from "../../hook/useAction";
import LogoutIcon from '@mui/icons-material/Logout'

const Settings = () => {

    const {signOut} = useAction()

    return (
        <Container maxWidth='xs'>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Typography variant='h3'>Настройки</Typography>
                <Card sx={{mt: 3, width: '100%'}}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => signOut()}>
                                <ListItemIcon>
                                    <LogoutIcon/>
                                </ListItemIcon>
                                <ListItemText primary='Выход'/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Card>
            </Box>
        </Container>
    )

}

export default Settings