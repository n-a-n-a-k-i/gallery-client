import React, {FC} from 'react';
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
import {useAction} from "../../hook/use.action";
import LogoutIcon from '@mui/icons-material/Logout'
import Tools from "./tools";

const Settings: FC = () => {

    const {signOut} = useAction()

    return (
        <>
            <Container
                maxWidth='xs'
                sx={{
                    mt: 4
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Typography variant='h3'>Настройки</Typography>
                    <Card
                        sx={{
                            mt: 4,
                            width: '100%'
                        }}
                    >
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
            <Tools/>
        </>
    )

}

export default Settings