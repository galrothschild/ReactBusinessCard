import React from 'react';
import Nav from './Nav';
import { Box, useTheme } from '@mui/material';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';

const Header = () => {
    const theme = useTheme();
    return (
        <Box sx={{ px: 3, minHeight: 'max-content', display: 'flex', alignItems: 'center' }} bgcolor={theme.palette.primary.main}>
            <Nav />
            <SearchBar />
            <MenuBar />
        </Box>
    );
};

export default Header;