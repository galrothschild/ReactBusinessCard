import { Box } from '@mui/material';
import React from 'react';
interface Props {
    title: string;
    subtitle: string;
}
const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
    return (
        <Box className="text-center mb-5">
            <h1 className='text-3xl font-bold'>{title}</h1>
            <h2 className='text-2xl'>{subtitle}</h2>
        </Box>
    );
};

export default PageHeader;