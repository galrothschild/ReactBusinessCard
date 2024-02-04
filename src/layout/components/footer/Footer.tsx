import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { AccountBoxOutlined, Favorite, Info } from '@mui/icons-material';

const Footer = () => {
    return (
        <BottomNavigation className='fixed bottom-0 w-full' sx={{ boxShadow: 3 }} >
            <BottomNavigationAction
                label="About"
                value="About"
                icon={<Info />}
            />
            <BottomNavigationAction
                label="Favorites"
                value="Favorites"
                icon={<Favorite />}
            />
            <BottomNavigationAction
                label="My cards"
                value="My cards"
                icon={<AccountBoxOutlined />}
            />
        </BottomNavigation>
    );
};

export default Footer;