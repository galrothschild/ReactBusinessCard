import { Box, Container } from '@mui/material';
import React from 'react';
import { PropsWithChildren } from '../../../interfaces';



const Main: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Box className="bg-blue-100">
            <Container className="bg-blue-100 pt-8 pb-16" sx={{ minHeight: "90vh", }} >
                {children}
            </Container >
        </Box>
    );
};

export default Main;