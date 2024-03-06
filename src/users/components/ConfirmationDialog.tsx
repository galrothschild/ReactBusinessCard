import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement;
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction="up" ref={ref} {...props} />;
});
type buttonColor =
	| "inherit"
	| "primary"
	| "secondary"
	| "success"
	| "error"
	| "info"
	| "warning";
type ConfirmationDialogProps = {
	buttonVariant: "text" | "outlined" | "contained";
	buttonText: string;
	buttonColor: buttonColor;
	dialogTitle: string;
	dialogContent: string;
	confirmButtonText: string;
	confirmButtonColor: buttonColor;
	confirmButtonAction: () => void;
};

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = (props) => {
	const [open, setOpen] = useState(false);
	const {
		buttonColor,
		buttonText,
		buttonVariant,
		dialogContent,
		dialogTitle,
		confirmButtonAction,
		confirmButtonColor,
		confirmButtonText,
	} = props;
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button
				variant={buttonVariant}
				color={buttonColor}
				onClick={handleClickOpen}
			>
				{buttonText}
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<DialogTitle>{dialogTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{dialogContent}
					</DialogContentText>
				</DialogContent>
				<DialogActions sx={{ display: "flex", justifyContent: "space-around" }}>
					<Button
						variant="contained"
						color={confirmButtonColor}
						onClick={() => {
							handleClose();
							confirmButtonAction();
						}}
					>
						{confirmButtonText}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ConfirmationDialog;
