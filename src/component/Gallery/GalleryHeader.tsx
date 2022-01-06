import React, {FC} from 'react';
import {AppBar, Avatar, IconButton, Toolbar, Typography} from "@mui/material";

const GalleryHeader: FC = () => {

    return (
        <AppBar
            position="static"
        >
            <Toolbar>
                <IconButton
                    onClick={() => window.location.reload()}
                    sx={{
                        p: 0,
                        mr: 2
                    }}
                >
                    <Avatar
                        src="logo40.png"
                        alt="logo40.png"
                    />
                </IconButton>
                <Typography
                    variant="h6"
                    flexGrow={1}
                >
                    Галерея
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

export default GalleryHeader
