import React, {FC, useState} from 'react';
import {CircularProgress, Fab} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings'
import Settings from "./Settings";
import {useTypedSelector} from "../../hook/use-typed-selector";

const SettingsOpen: FC = () => {

    const {users, isFind} = useTypedSelector(state => state.user)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Fab
                disabled={!users.length || isFind}
                onClick={() => setIsOpen(true)}
            >
                {!users.length || isFind
                    ? <CircularProgress/>
                    : <SettingsIcon/>
                }
            </Fab>
            <Settings
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )

}

export default SettingsOpen
