import { CardMedia } from "@mui/material";
import React, { memo } from "react";

interface Props {
	image: {
		url: string;
		alt: string;
	};
}

const CardHeader: React.FC<Props> = ({ image }) => {
	const { url, alt } = image;
	return (
		<div style={{ height: "194px" }}>
			<CardMedia
				component="img"
				height="194"
				style={{ aspectRatio: "1.5" }}
				image={url}
				alt={alt}
			/>
		</div>
	);
};

export default memo(CardHeader);
