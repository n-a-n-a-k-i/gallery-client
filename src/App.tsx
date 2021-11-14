import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "./hook/useTypedSelector";
import {useAction} from "./hook/useAction";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
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
                <Switch>
                    <Route exact path={RouteType.SIGN_IN} component={SignIn}/>
                    <Redirect to={RouteType.SIGN_IN}/>
                </Switch>
            </BrowserRouter>
        )
    }

    console.log(user)
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={RouteType.GALLERY} component={Gallery}/>
                <Route exact path={RouteType.ACCOUNT} component={Account}/>
                <Redirect to={RouteType.GALLERY}/>
            </Switch>
        </BrowserRouter>
    )

}

export default App