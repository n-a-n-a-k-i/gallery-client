import React, {FC} from 'react';
import {Box, CircularProgress, Typography} from "@mui/material";

interface LoaderProps {
    text: string
}

const Loader: FC<LoaderProps> = ({text}) => {

    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <CircularProgress/>
            <Typography
                sx={{
                    pt: 2,
                    textAlign: 'center'
                }}
            >
                {text}
            </Typography>
        </Box>
    )

}

export default Loader
