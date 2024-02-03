import { useTheme } from '@mui/material';
import React from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

interface Props {
    to: string;
    children: React.ReactNode;
}

const CustomLink: React.FC<Props> = ({ to, children, ...props }) => {
    const theme = useTheme();
    const resolvedPath = useLocation();
    const isActive: Boolean = useMatch({ path: resolvedPath.pathname, end: true })?.pathname === to;
    const style = { color: theme.palette.primary.contrastText, border: `1px solid ${theme.palette.primary.light}`, backgroundColor: theme.palette.primary.main };
    if (isActive) {
        style.border = `1px solid ${theme.palette.secondary.light}`;
        style.color = theme.palette.secondary.contrastText;
        style.backgroundColor = theme.palette.secondary.main;
    }
    return (
        <Link to={to} style={style} className='flex items-center h-full px-2 transition-all shadow-sm hover:brightness-90 active:scale-95' >{children}</Link>

    );
};

export default CustomLink;