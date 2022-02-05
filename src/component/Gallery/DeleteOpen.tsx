import React, {FC, useState} from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import {Fab} from "@mui/material";
import Delete from "./Delete";

const DeleteOpen: FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <>
            <Fab
                sx={{
                    bgcolor: 'error.main',
                    '&:hover': {
                        bgcolor: 'error.dark'
                    }
                }}
                onClick={() => setIsOpen(true)}
            >
                <DeleteIcon/>
            </Fab>
            <Delete
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )
}

export default DeleteOpen
