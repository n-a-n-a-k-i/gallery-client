import React, {FC, useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography
} from "@mui/material";
import {useAction} from "../../hook/useAction";
import {Login, Visibility, VisibilityOff} from "@mui/icons-material";

const SignIn: FC = () => {

    const {signIn} = useAction()
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

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
                    <FormControl variant='outlined' margin='normal' fullWidth>
                        <InputLabel required>Пароль</InputLabel>
                        <OutlinedInput
                            label='Пароль'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            autoComplete='current-password'
                            type={passwordVisible ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position='end'>
                                    <IconButton
                                        aria-label='Переключить отображение пароля'
                                        onClick={() => setPasswordVisible(!passwordVisible)}
                                        onMouseDown={event => event.preventDefault()}
                                        edge='end'
                                    >
                                        {passwordVisible ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
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