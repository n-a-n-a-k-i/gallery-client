import React from 'react';
import {Fab} from "@mui/material";
import {DoneAll, Search, Settings, ViewComfy} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {RouteType} from "../../type/route.type";

const MenuMain = () => {

    const navigate = useNavigate()
    const position = 'fixed'
    const bottom = 8
    const size = 56
    const right = (i: number) => bottom + (bottom + size) * i

    return (
        <>
            <Fab
                onClick={() => navigate(RouteType.SETTINGS)}
                sx={{position, right: right(3), bottom}}
            ><Settings/></Fab>
            <Fab
                sx={{position, right: right(2), bottom}}
            ><ViewComfy/></Fab>
            <Fab
                sx={{position, right: right(1), bottom}}
            ><DoneAll/></Fab>
            <Fab
                sx={{position, right: right(0), bottom}}
            ><Search/></Fab>
        </>
    );

};

export default MenuMain;