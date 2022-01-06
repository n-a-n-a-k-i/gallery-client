import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../hook/use-typed-selector";
import {useAction} from "../hook/use-action";
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import SignIn from "./SignIn";
import Gallery from "./Gallery";
import FullScreenLoader from "./common/FullScreenLoader";

enum RouteType {
    SIGN_IN = '/sign-in',
    GALLERY = '/'
}

const App: FC = () => {

    const {user, isSignIn, isRefresh, isSignOut, errors} = useTypedSelector(state => state.account)
    const {accountRefresh} = useAction()
    const [isInit, setIsInit] = useState<boolean>(true)

    useEffect(() => {

        (async () => {

            setIsInit(false)
            await accountRefresh()

        })()

    }, [])

    if (isInit) {
        return <FullScreenLoader messages={'Инициализация приложения'}/>
    }

    if (isSignIn) {
        return <FullScreenLoader messages={'Вход в учётную запись'}/>
    }

    if (isRefresh) {
        return <FullScreenLoader messages={'Проверка учётной записи'}/>
    }

    if (isSignOut) {
        return <FullScreenLoader messages={'Выход из учётной записи'}/>
    }

    if (!user) {

        if (errors) console.log(errors)

        return (
            <BrowserRouter>
                <Routes>
                    <Route path={RouteType.SIGN_IN} element={<SignIn/>}/>
                    <Route path={'*'} element={<Navigate to={RouteType.SIGN_IN}/>}/>
                </Routes>
            </BrowserRouter>
        )

    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteType.GALLERY} element={<Gallery/>}/>
                <Route path={'*'} element={<Navigate to={RouteType.GALLERY}/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App
