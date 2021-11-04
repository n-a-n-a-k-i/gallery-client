import React, {FC, useState} from 'react';
import {Avatar, Box, Button, Container, TextField, Typography} from "@mui/material";
import {useAction} from "../../hook/useAction";
import {Login} from "@mui/icons-material";

const SignIn: FC = () => {

    const {signIn} = useAction()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <Container maxWidth='xs'>
            <Box sx={{marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Avatar sx={{m: 1}}>
                    <Login/>
                </Avatar>
                <Typography variant='h5'>Gallery</Typography>
                <Typography>Вход в систему</Typography>
                <Box component="form" onSubmit={() => signIn(username, password)} noValidate sx={{mt: 1}}>
                    <TextField
                        label='Имя пользователя'
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                        autoComplete='username'
                        margin='normal'
                        required
                        fullWidth
                        autoFocus
                    />
                    <TextField
                        label='Пароль'
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                        autoComplete='current-password'
                        margin='normal'
                        required
                        fullWidth
                        type='password'
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{mt: 3, mb: 2}}
                    >
                        Войти
                    </Button>
                </Box>
            </Box>
        </Container>
    )

}

export default SignIn