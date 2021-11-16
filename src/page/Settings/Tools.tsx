import React, {FC} from 'react';
import {Fab} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {useNavigate} from "react-router-dom";

const Tools: FC = () => {

    const navigate = useNavigate()

    const position = 'fixed'
    const bottom = 8
    const size = 56
    const right = (i: number) => bottom + (bottom + size) * i

    return (
        <>
            <Fab
                onClick={() => navigate(-1)}
                sx={{
                    position,
                    right: right(0),
                    bottom
                }}
            >
                <ArrowBackIcon/>
            </Fab>
        </>
    )

}

export default Tools
