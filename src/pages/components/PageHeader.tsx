import { Box, useTheme } from "@mui/material";
import React from "react";
interface Props {
	title: string;
	subtitle: string;
}
const PageHeader: React.FC<Props> = ({ title, subtitle }) => {
	const theme = useTheme();
	return (
		<Box className="text-center mb-5">
			<h1
				className="text-3xl font-bold"
				style={{ color: theme.palette.mode === "dark" ? "#fff" : "#121212" }}
			>
				{title}
			</h1>
			<h2
				className="text-2xl"
				style={{
					color: theme.palette.mode === "dark" ? "#fff" : "#121212",
					overflowWrap: "break-word",
				}}
			>
				{subtitle}
			</h2>
		</Box>
	);
};

export default PageHeader;
