import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

interface Props {
    label: string;
    to: string;
}

const NavCustomLink: React.FC<Props> = ({ label, to }) => {
    return (
        <Link to={to} className='hover:brightness-90 hover:bg-gray-300 w-full'>
            <Button variant="text" color="primary" sx={{ textTransform: "none" }} >
                {label}
            </Button>
        </Link>
    );
};

export default NavCustomLink;