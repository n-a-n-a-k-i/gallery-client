import React from 'react';
import {Fab} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {RouteType} from "../../type/route.type";
import SettingsIcon from '@mui/icons-material/Settings'
import ViewComfyIcon from '@mui/icons-material/ViewComfy'
import DoneAllIcon from '@mui/icons-material/DoneAll'
import SearchIcon from '@mui/icons-material/Search'

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
                sx={{
                    position,
                    right: right(3),
                    bottom
                }}
            >
                <SettingsIcon/>
            </Fab>
            <Fab
                sx={{
                    position,
                    right: right(2),
                    bottom
                }}
            >
                <ViewComfyIcon/>
            </Fab>
            <Fab
                sx={{
                    position,
                    right: right(1),
                    bottom
                }}
            >
                <DoneAllIcon/>
            </Fab>
            <Fab
                sx={{
                    position,
                    right: right(0),
                    bottom
                }}
            >
                <SearchIcon/>
            </Fab>
        </>
    );

};

export default MenuMain;