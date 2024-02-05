import { Box, Container } from '@mui/material';
import React from 'react';

interface Props {
    children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
    return (
        <Box className="bg-blue-100">
            <Container className="bg-blue-100 pt-8 pb-16" sx={{ minHeight: "90vh", }} >
                {children}
            </Container >
        </Box>
    );
};

export default Main;