import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import UserEntry from "./userEntry";
import { useUsers } from "../utils/useUsers";
import { Box, CircularProgress } from "@mui/material";

const UsersList = () => {
	const { users, isPending, error } = useUsers();
	if (isPending)
		return (
			<Box width="100%" sx={{ display: "grid", placeItems: "center", pt: 3 }}>
				<CircularProgress />
			</Box>
		);
	return (
		<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
			{users.map((user) => (
				<UserEntry user={user} key={user._id} />
			))}
		</Box>
	);
};

export default UsersList;
