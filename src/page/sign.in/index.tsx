import React, {FC, useState} from 'react';
import {
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
import {useAction} from "../../hook/use.action";
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const SignIn: FC = () => {

    const {signIn} = useAction()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
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
                <Typography variant='h5'>Галерея</Typography>
                <Box
                    component="form"
                    onSubmit={() => signIn(username, password)}
                    noValidate
                    sx={{
                        mt: 4
                    }}
                >
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
                    <FormControl
                        variant='outlined'
                        margin='normal'
                        fullWidth
                    >
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
                                        {passwordVisible ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <Button
                        type='submit'
                        variant='contained'
                        fullWidth
                        sx={{mt: 4}}
                    >
                        Войти
                    </Button>
                </Box>
            </Box>
        </Container>
    )

}

export default SignIn
