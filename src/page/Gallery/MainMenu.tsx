import React, {MouseEvent, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Box, Fab, ListItemIcon, ListItemText, Menu, MenuItem} from "@mui/material";
import {Check, MoreVert, Person, Search, ViewComfy} from "@mui/icons-material";
import {RouteType} from "../../type/route.type";

const MainMenu = () => {

    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)

    const onOpen = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }

    const onClose = () => {
        setAnchorEl(null)
    }

    return (
        <Box>
            <Fab
                id='gallery-menu-button'
                size='small'
                aria-label='Меню'
                sx={{position: 'fixed', bottom: 16, right: 16}}
                aria-controls='gallery-menu'
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={onOpen}
            >
                <MoreVert/>
            </Fab>
            <Menu
                id='gallery-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right'
                }}
                MenuListProps={{
                    'aria-labelledby': 'gallery-menu-button'
                }}
            >
                <MenuItem onClick={() => navigate(RouteType.ACCOUNT)}>
                    <ListItemIcon>
                        <Person/>
                    </ListItemIcon>
                    <ListItemText>Аккаунт</ListItemText>
                </MenuItem>
                <MenuItem onClick={onClose}>
                    <ListItemIcon>
                        <Check/>
                    </ListItemIcon>
                    <ListItemText>Выбрать</ListItemText>
                </MenuItem>
                <MenuItem onClick={onClose}>
                    <ListItemIcon>
                        <ViewComfy/>
                    </ListItemIcon>
                    <ListItemText>Вид</ListItemText>
                </MenuItem>
                <MenuItem onClick={onClose}>
                    <ListItemIcon>
                        <Search/>
                    </ListItemIcon>
                    <ListItemText>Поиск</ListItemText>
                </MenuItem>
            </Menu>
        </Box>
    )

}

export default MainMenu