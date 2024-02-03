import { Box, Menu } from '@mui/material';
import { IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NavCustomLink from '../../../routes/helpers/NavCustomLink';
import ROUTES from '../../../routes/helpers/ROUTES';

const MenuBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
        console.log(anchorElNav);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const user = true;
    const style = { display: "flex", flexDirection: "column" };
    return (
        <>
            <IconButton onClick={handleOpenNavMenu} aria-controls="menu-appbar"
                aria-haspopup="true">
                <MenuIcon color='info' />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorElNav} keepMounted open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}>
                <Box sx={style}>
                    {Boolean(user) && <>
                        < NavCustomLink to={ROUTES.USER_PROFILE} label='My Profile' />
                        <NavCustomLink to={ROUTES.EDIT_USER} label='Edit Profile' />
                        <NavCustomLink to={ROUTES.LOGIN} label='Log Out' />
                    </>
                    }
                    <NavCustomLink to='about' label='About' />
                    {!user && <>
                        < NavCustomLink to={ROUTES.USER_PROFILE} label='Log In' />
                        <NavCustomLink to={ROUTES.LOGIN} label='Log In' />
                        <NavCustomLink to={ROUTES.LOGIN} label='Log In' />
                    </>
                    }
                </Box>
            </Menu >
        </>
    );
};

export default MenuBar;