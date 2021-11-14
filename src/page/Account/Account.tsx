import React, {FC} from 'react';
import {Avatar, Box, Button, Container, Typography} from "@mui/material";
import {Logout} from "@mui/icons-material";
import {useAction} from "../../hook/useAction";

const Account: FC = () => {

    const {signOut} = useAction()

    return (
        <Container maxWidth='xs'>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{m: 1}}>
                    <Logout/>
                </Avatar>
                <Typography variant='h5'>Аккаунт</Typography>
                <Typography>Управление учётной записью</Typography>
                <Box sx={{mt: 1}}>
                    <Button variant='contained' sx={{mt: 3, mb: 2}} onClick={() => signOut()}>Выйти</Button>
                </Box>
            </Box>
        </Container>
    )

}

export default Account