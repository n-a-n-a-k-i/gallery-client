import React, {FC} from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";

interface FullScreenLoaderProps {
    title?: string
    messages?: string | string[]
}

const FullScreenLoader: FC<FullScreenLoaderProps> = ({title = 'Загрузка', messages}) => {

    if (typeof messages === 'string') messages = [messages]

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100vh"
        >
            <CircularProgress/>
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

export default FullScreenLoader
