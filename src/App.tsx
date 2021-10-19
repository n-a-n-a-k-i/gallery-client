import React, {useEffect} from 'react';
import {useTypedSelector} from "./hook/useTypedSelector";
import {useAction} from "./hook/useAction";
import SignInForm from "./component/SignInForm";

const App = () => {

    const {user, error, loading} = useTypedSelector(state => state.account)
    const {refresh} = useAction()

    useEffect(() => {
        refresh()
    }, [])

    if (loading) {
        console.log('Загрузка')
        return <div>Загрузка</div>
    }

    if (error) {
        console.log(error)
        return <div>{error}<SignInForm/></div>
    }

    if (user) {
        console.log(user)
        return <div>{JSON.stringify(user)}</div>
    }

    console.log('Инициализация')
    return <div>Инициализация</div>

};

export default App;