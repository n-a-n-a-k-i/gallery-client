import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "./hook/use.typed.selector";
import {useAction} from "./hook/use.action";
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import SignIn from "./page/sign.in";
import Gallery from "./page/gallery";
import Loader from "./component/loader";

enum RouteType {
    SIGN_IN = '/sign-in',
    GALLERY = '/'
}

const App: FC = () => {

    const {user, isAuthorized, isLoading, error} = useTypedSelector(state => state.account)
    const {refresh} = useAction()
    const [isInit, setIsInit] = useState<boolean>(true)

    useEffect(() => {

        (async () => {

            setIsInit(false)
            await refresh()

        })()

    }, [])

    if (isInit) {
        console.log('render', 'init')
        return <Loader text='Инициализация приложения'/>
    }

    if (isLoading) {
        console.log('render', 'load')
        return <Loader text='Проверка учётной записи'/>
    }

    if (!isAuthorized) {
        console.log('render', 'sign-in')
        if (error) console.log(error)
        return (
            <BrowserRouter>
                <Routes>
                    <Route path={RouteType.SIGN_IN} element={<SignIn/>}/>
                    <Route path={'*'} element={<Navigate to={RouteType.SIGN_IN}/>}/>
                </Routes>
            </BrowserRouter>
        )
    }

    console.log('render', user)
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
