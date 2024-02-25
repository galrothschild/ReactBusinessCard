import Snackbar from "@mui/material/Snackbar";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Alert } from "@mui/material";

const SnackbarComponent = () => {
	const { isOpen, snackColor, snackMessage } = useSelector(
		(state: RootState) => state.snack,
	);
	return (
		<Snackbar
			anchorOrigin={{ vertical: "top", horizontal: "right" }}
			open={isOpen}
			color={snackColor}
			sx={{ height: "20%", zIndex: 2 }}
		>
			<Alert variant="filled" severity={snackColor}>
				{snackMessage}
			</Alert>
		</Snackbar>
	);
};

export default SnackbarComponent;
