import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use-typed-selector";
import {AppBar, Avatar, IconButton, Toolbar, Typography} from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import {useAction} from "../../hook/use-action";

const GalleryHeader: FC = () => {

    const {total, years, months, days, dateColumn, orderDirection, limit} = useTypedSelector(state => state.photo)

    const {fetchPhotos, setPhotoParams} = useAction()

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
                {total !== null && (
                    <Typography
                        variant="h6"
                        flexGrow={1}
                    >
                        {total} шт
                    </Typography>
                )}
                <IconButton
                    onClick={async () => {
                        await setPhotoParams(years, months, days, dateColumn, orderDirection, limit)
                        await fetchPhotos(years, months, days, dateColumn, orderDirection, limit, 0)
                    }}
                    size="large"
                >
                    <ReplayIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )

}

export default GalleryHeader
