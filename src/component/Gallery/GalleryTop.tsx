import React, {FC} from 'react';
import {AppBar, Avatar, CircularProgress, IconButton, Toolbar, Typography} from "@mui/material";
import {useTypedSelector} from "../../hook/use-typed-selector";

const GalleryTop: FC = () => {

    const {total, isFindTotal} = useTypedSelector(state => state.photo)

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
                    />
                </IconButton>
                <Typography
                    variant="h6"
                    flexGrow={1}
                >
                    Галерея
                </Typography>
                {isFindTotal ? (
                    <CircularProgress/>
                ) : (
                    <Typography
                        variant="h6"
                    >
                        {total} шт
                    </Typography>
                )}
            </Toolbar>
        </AppBar>
    )

}

export default GalleryTop
