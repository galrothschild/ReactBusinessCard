import { CardMedia } from '@mui/material';
import React from 'react';

interface Props {
    image: {
        url: string;
        alt: string;
    };
}

const CardHeader: React.FC<Props> = ({ image }) => {
    const { url, alt } = image;
    return <CardMedia component='img' height="194" style={{ aspectRatio: "1.5" }} image={url} alt={alt} />;
};

export default CardHeader;