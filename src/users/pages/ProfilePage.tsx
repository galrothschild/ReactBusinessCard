import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box } from "@mui/material";
import { capitalizeTitle } from "../../forms/utils/utils";

const ProfilePage = () => {
	const { name, address, image, email, phone, isBusiness, createdAt, isAdmin } =
		useSelector((state: RootState) => state.user.user);
	const isDark = useSelector((state: RootState) => state.theme.isDark);
	const date = new Date(createdAt);
	const day = String(date.getDate()).padStart(2, "0");
	const month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
	const year = date.getFullYear();

	const formattedDate = `${day}/${month}/${year}`;
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				gap: 10,
				flexDirection: { sm: "column", xs: "column", md: "row" },
			}}
		>
			<img src={image.url} alt={image.alt} style={{ maxHeight: "200px" }} />
			<Box sx={{ color: isDark ? "#fff" : "#121212" }}>
				<h1>{capitalizeTitle(`${name.first} ${name.last}`)}</h1>
				<p>Email: {email}</p>
				<p>Phone: {phone}</p>
				<p>
					Address:{" "}
					{capitalizeTitle(
						`${address.country} - ${address.city} - ${address.street} - ${address.street} - ${address.houseNumber}`,
					)}
				</p>
				<p>Business User: {isBusiness ? "Yes" : "No"}</p>
				<p>Created At: {formattedDate}</p>
				<p>Admin: {isAdmin ? "Yes" : "No"}</p>
			</Box>
		</Box>
	);
};

export default ProfilePage;
