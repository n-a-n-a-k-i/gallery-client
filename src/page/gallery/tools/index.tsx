import React, {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Fab, Stack} from "@mui/material";
import {RouteType} from "../../../type/route.type";
import SettingsIcon from "@mui/icons-material/Settings";

const Tools: FC = () => {

    const navigate = useNavigate()

    return (
        <Stack
            direction='row'
            justifyContent='center'
            spacing={1}
            sx={{
                zIndex: 1,
                position: 'fixed',
                right: 0,
                bottom: 0,
                left: 0,
                pb: 1
            }}
        >
            <Fab
                onClick={() => navigate(RouteType.SETTINGS)}
            >
                <SettingsIcon/>
            </Fab>
        </Stack>
    )

}

export default Tools
