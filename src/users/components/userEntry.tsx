import React from "react";
import { IUser } from "../models/models";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ConfirmationDialog from "./ConfirmationDialog";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../utils/userApiService";
import { removeUserFromUsers } from "../../redux/users/usersSlice";
import { RootState } from "../../redux/store";
import ROUTES from "../../routes/helpers/ROUTES";

type userEntryProps = {
	user: IUser;
};

const UserEntry: React.FC<userEntryProps> = ({ user }) => {
	const token = useSelector((state: RootState) => state.user.token);
	const name = `${user.name.first} ${user.name.middle || ""}${
		user.name.middle ? ` ${user.name.last}` : user.name.last
	}`;
	const theme = useTheme();
	const backgroundColor = theme.palette.mode === "dark" ? "#23232370" : "white";
	const textColor = theme.palette.mode === "dark" ? "white" : "black";
	const navigate = useNavigate();
	const dispatch = useDispatch();
	return (
		<Box
			sx={{
				display: "flex",
				gap: 2,
				flexDirection: { md: "row", xs: "column" },
				alignItems: "center",
				justifyContent: "flex-start",
				padding: "10px",
				border: "1px solid black",
				borderRadius: "10px",
				backgroundColor: backgroundColor,
				color: textColor,
			}}
		>
			<Typography variant="body1">Name: {name}</Typography>
			<Typography variant="body1">Email: {user.email}</Typography>
			<Button
				variant="outlined"
				color="info"
				sx={{ ml: { md: "auto", xs: "unset" } }}
				onClick={() => {
					navigate(`/${ROUTES.EDIT_USER}/${user._id}`);
				}}
			>
				Edit User
			</Button>
			<Button
				variant="outlined"
				color="info"
				onClick={() => {
					navigate(`/${ROUTES.USER_PROFILE}/${user._id}`);
				}}
			>
				View User
			</Button>
			{!user.isAdmin && (
				<ConfirmationDialog
					buttonColor="error"
					buttonText="Delete User"
					buttonVariant="contained"
					confirmButtonAction={() => {
						deleteUser(user._id, token).then(() => {
							dispatch(removeUserFromUsers(user._id));
						});
					}}
					confirmButtonColor="error"
					confirmButtonText="Delete User"
					dialogContent="Are you sure you want to delete this user? This action cannot be undone."
					dialogTitle="Delete User"
				/>
			)}
		</Box>
	);
};

export default UserEntry;
