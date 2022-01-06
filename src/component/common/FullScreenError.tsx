import React, {FC} from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';

interface FullScreenErrorProps {
    title?: string
    messages?: string | string[]
}

const FullScreenError: FC<FullScreenErrorProps> = ({title = 'Ошибка', messages}) => {

    if (typeof messages === 'string') messages = [messages]

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <Avatar
                sx={{
                    bgcolor: 'error.main'
                }}
            >
                <ErrorIcon/>
            </Avatar>
            <Typography
                variant="h6"
                align="center"
                pt={2}
            >
                {title}
            </Typography>
            {messages?.map((message, i) => (
                <Typography
                    key={i}
                    align="center"
                >
                    {message}
                </Typography>
            ))}
        </Box>
    )

}

export default FullScreenError
