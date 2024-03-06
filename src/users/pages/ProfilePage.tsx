import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box, Button } from "@mui/material";
import { capitalizeTitle } from "../../forms/utils/utils";
import PageHeader from "../../pages/components/PageHeader";
import ConfirmationDialog from "../components/ConfirmationDialog";
import { useDeleteUser } from "../utils/useDeleteUser";
import { useNavigate, useParams } from "react-router-dom";

const ProfilePage = () => {
	const navigate = useNavigate();
	const { _id } = useSelector((state: RootState) => state.user.user);
	const userID = useParams().id || _id;
	const { name, address, image, email, phone, isBusiness, createdAt, isAdmin } =
		useSelector((state: RootState) => state.users.users).find(
			(user) => user._id === userID,
		) ||
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useSelector((state: RootState) => state.user.user);
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	const date = new Date(createdAt);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
	const year = date.getFullYear();
	const state =
		address.state === "not defined" || address.state === ""
			? ""
			: ` - ${address.state}`;
	const formattedAddress = capitalizeTitle(
		`${address.country}${state} - ${address.city} - ${address.street} - ${address.houseNumber}`,
	);
	const { handleDeleteUser } = useDeleteUser(userID);
	const formattedDate = `${day}/${month}/${year}`;
	return (
		<>
			<PageHeader
				title="User Profile"
				subtitle={capitalizeTitle(`${name.first} ${name.last}`)}
			/>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 3,
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: 10,
						flexDirection: { sm: "column", xs: "column", md: "row" },
					}}
				>
					<img src={image.url} alt={image.alt} style={{ maxHeight: "200px" }} />
					<Box sx={{ color: isDark ? "#fff" : "#121212" }}>
						<h1>{}</h1>
						<p>Email: {email}</p>
						<p>Phone: {phone}</p>
						<p>Address: {formattedAddress}</p>
						<p>Business User: {isBusiness ? "Yes" : "No"}</p>
						<p>Created At: {formattedDate}</p>
						<p>Admin: {isAdmin ? "Yes" : "No"}</p>
					</Box>
				</Box>
				{!isAdmin && (
					<ConfirmationDialog
						buttonColor="error"
						buttonText="Delete User"
						buttonVariant="outlined"
						confirmButtonAction={handleDeleteUser}
						confirmButtonColor="error"
						confirmButtonText="Yes I am sure"
						dialogTitle="Are you sure?"
						dialogContent="This cannot be undone."
					/>
				)}
				<Button variant="outlined" onClick={() => navigate(-1)}>
					Cancel
				</Button>
			</Box>
		</>
	);
};

export default ProfilePage;
