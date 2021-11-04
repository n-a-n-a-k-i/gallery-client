import React, {FC} from 'react';
import {Avatar, Box, Button, Container, Typography} from "@mui/material";
import {Logout} from "@mui/icons-material";
import {useAction} from "../../hook/useAction";

const SignOut: FC = () => {

    const {signOut} = useAction()

    return (
        <Container maxWidth='xs'>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{m: 1}}>
                    <Logout/>
                </Avatar>
                <Typography variant='h5'>Gallery</Typography>
                <Typography>Выход из системы</Typography>
                <Button
                    onClick={() => signOut()}
                    variant='contained'
                    fullWidth
                    sx={{mt: 3, mb: 2}}
                >
                    Выйти
                </Button>
            </Box>
        </Container>
    )

}

export default SignOut