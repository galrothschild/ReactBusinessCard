import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Box } from "@mui/material";
import { capitalizeTitle } from "../../forms/utils/utils";

const ProfilePage = () => {
	const { name, address, image, email, phone, isBusiness, createdAt, isAdmin } =
		useSelector((state: RootState) => state.user.user);

	return (
		<Box sx={{ display: "flex", alignItems: "center", gap: 10 }}>
			<img src={image.url} alt={image.alt} style={{ maxHeight: "200px" }} />
			<Box>
				<h1>{capitalizeTitle(`${name.first} ${name.last}`)}</h1>
				<p>Email: {email}</p>
				<p>Phone: {phone}</p>
				<p>
					Address:{" "}
					{`${address.country} - ${address.city} - ${address.street} - ${address.houseNumber}`}
				</p>
				<p>Is Business: {isBusiness ? "Yes" : "No"}</p>
				<p>Created At: {createdAt.toString()}</p>
				<p>Is Admin: {isAdmin ? "Yes" : "No"}</p>
			</Box>
		</Box>
	);
};

export default ProfilePage;
