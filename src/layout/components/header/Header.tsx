import Nav from './Nav';
import { Box, useTheme } from '@mui/material';
import SearchBar from './SearchBar';
import MenuBar from './MenuBar';
import { memo } from 'react';

const Header = () => {
    const theme = useTheme();
    return (
        <Box sx={{ px: 3, minHeight: 'max-content', display: 'flex', alignItems: 'center', boxShadow: 3, position: 'sticky', top: 0, zIndex: 2 }} bgcolor={theme.palette.primary.main}>
            <Nav />
            <SearchBar />
            <MenuBar />
        </Box>
    );
};

export default memo(Header);