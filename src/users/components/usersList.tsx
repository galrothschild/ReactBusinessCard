import UserEntry from "./userEntry";
import { Box, CircularProgress } from "@mui/material";
import { ViewportList as List } from "react-viewport-list";
import { IUser } from "../models/models";

type UsersListProps = {
	users: IUser[];
	isPending: boolean;
};

const UsersList: React.FC<UsersListProps> = ({ users, isPending }) => {
	if (isPending)
		return (
			<Box width="100%" sx={{ display: "grid", placeItems: "center", pt: 3 }}>
				<CircularProgress />
			</Box>
		);
	return (
		<List items={users}>
			{(user) => {
				return <UserEntry user={user} key={user._id} />;
			}}
		</List>
	);
};

export default UsersList;
