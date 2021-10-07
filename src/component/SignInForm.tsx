import React, {FC, useState} from 'react';

const SignInForm: FC = () => {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <div>
            <input
                onChange={event => setUsername(event.target.value)}
                value={username}
                type="text"
                placeholder="Имя пользователя"
            />
            <input
                onChange={event => setPassword(event.target.value)}
                value={password}
                type="password"
                placeholder="Пароль"
            />
            <button>Войти</button>
        </div>
    );
};

export default SignInForm;