import { useTheme } from '@mui/material';
import React from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
import { PropsWithChildren } from '../../interfaces';

interface LinkProps extends PropsWithChildren {
    to: string;
}

const CustomLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
    const theme = useTheme();
    const resolvedPath = useLocation();
    const isActive: Boolean = useMatch({ path: resolvedPath.pathname, end: true })?.pathname === to;
    const style = { color: theme.palette.primary.contrastText, border: `1px solid ${theme.palette.primary.light}`, backgroundColor: theme.palette.primary.main };
    if (isActive) {
        style.border = `1px solid ${theme.palette.secondary.dark}`;
        style.color = theme.palette.secondary.contrastText;
        style.backgroundColor = theme.palette.secondary.main;
    }
    return (
        <Link to={to} style={style} className='flex items-center h-full px-2 transition-all shadow-sm hover:brightness-90 active:scale-95' >{children}</Link>

    );
};

export default CustomLink;