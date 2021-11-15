import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "./hook/useTypedSelector";
import {useAction} from "./hook/useAction";
import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import {RouteType} from "./type/route.type";
import {CircularProgress, Grid} from "@mui/material";
import SignIn from "./page/SignIn";
import Gallery from "./page/Gallery";
import Account from "./page/Account";

const App: FC = () => {

    const {user, isAuthorized, isLoading, error} = useTypedSelector(state => state.account)
    const {refresh} = useAction()
    const [isInit, setIsInit] = useState(true)

    useEffect(() => {
        refresh()
        setIsInit(false)
    }, [])

    if (isInit) {
        console.log('Инициализация')
        return (
            <Grid container alignItems='center' justifyContent='center' style={{minHeight: '100vh'}}>
                <CircularProgress color='secondary'/>
            </Grid>
        )
    }

    if (isLoading) {
        console.log('Загрузка')
        return (
            <Grid container alignItems='center' justifyContent='center' style={{minHeight: '100vh'}}>
                <CircularProgress/>
            </Grid>
        )
    }

    if (!isAuthorized) {
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

    console.log(user)
    return (
        <BrowserRouter>
            <Routes>
                <Route path={RouteType.GALLERY} element={<Gallery/>}/>
                <Route path={RouteType.ACCOUNT} element={<Account/>}/>
                <Route path={'*'} element={<Navigate to={RouteType.GALLERY}/>}/>
            </Routes>
        </BrowserRouter>
    )

}

export default App