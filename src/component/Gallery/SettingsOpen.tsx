import React, {FC, useState} from 'react';
import {Fab} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'
import Settings from "./Settings";

const SettingsOpen: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Fab
                onClick={() => setIsOpen(true)}
            >
                <SettingsIcon/>
            </Fab>
            <Settings isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </>
    )

}

export default SettingsOpen
