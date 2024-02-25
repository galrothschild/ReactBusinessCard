import { Box, Container, useTheme } from "@mui/material";
import React from "react";
import { PropsWithChildren } from "../../../interfaces";
import SnackbarComponent from "../../../snackbar/Snackbar";

const Main: React.FC<PropsWithChildren> = ({ children }) => {
	const theme = useTheme();
	return (
		<Box bgcolor={theme.palette.mode === "dark" ? "#454545" : "#e3f2fd"}>
			<Container className="pt-8 pb-16" sx={{ minHeight: "90vh" }}>
				<SnackbarComponent />
				{children}
			</Container>
		</Box>
	);
};

export default Main;
