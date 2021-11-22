import React, {FC} from 'react';
import {Box, Typography} from "@mui/material";

interface PhotoTotalProps {
    total: number
}

const PhotoTotal: FC<PhotoTotalProps> = ({total}) => {

    return (
        <Box
            sx={{
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'right'
            }}
        >
            <Typography
                variant='h3'
                sx={{
                    px: 2
                }}
            >
                {total} шт
            </Typography>
        </Box>
    )

}

export default PhotoTotal
