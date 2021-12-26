import React, {FC} from 'react';
import {useTypedSelector} from "../../hook/use.typed.selector";
import {Avatar, Box, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const Header: FC = () => {

    const {total} = useTypedSelector(state => state.photo)

    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            bgcolor={grey[900]}
            py={2}
        >
            <Box
                ml={2}
                display='flex'
                alignItems='center'
            >
                <Avatar
                    alt="Галерея"
                    src="logo40.png"
                    variant="square"
                />
                <Typography
                    variant='h5'
                    ml={2}
                >Галерея</Typography>
            </Box>
            {total !== null && (
                <Typography
                    variant='h5'
                    mr={2}
                >{total} шт</Typography>
            )}
        </Box>
    )

}

export default Header
