import React, {FC, useState} from 'react';
import {useAction} from "../../hook/use-action";
import {
    Box,
    Button,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const SignInForm: FC = () => {

    const {accountSignIn} = useAction()

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <Box
            component="form"
            onSubmit={() => accountSignIn({username, password})}
            noValidate
        >
            <TextField
                label="Имя пользователя"
                value={username}
                onChange={event => setUsername(event.target.value)}
                autoComplete="username"
                margin="normal"
                required
                fullWidth
                autoFocus
            />
            <FormControl
                variant="outlined"
                margin="normal"
                fullWidth
            >
                <InputLabel required>
                    Пароль
                </InputLabel>
                <OutlinedInput
                    label="Пароль"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    autoComplete="current-password"
                    type={passwordVisible ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment
                            position="end"
                        >
                            <IconButton
                                aria-label="Переключить отображение пароля"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                                onMouseDown={event => event.preventDefault()}
                                edge="end"
                            >
                                {passwordVisible ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                    mt: 2
                }}
            >
                Войти
            </Button>
        </Box>
    )

}

export default SignInForm
