import { Box, Menu } from "@mui/material";
import { IconButton } from "@mui/material";
import React from "react";
import { PersonOutline, AccountCircle } from "@mui/icons-material";
import NavCustomLink from "../../../routes/helpers/NavCustomLink";
import ROUTES from "../../../routes/helpers/ROUTES";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useUser } from "../../../users/utils/useUser";

const MenuBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null,
	);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	const user = useSelector((state: RootState) => state.user.isLoggedIn);
	const style = { display: "flex", flexDirection: "column" };
	const { handleLogout } = useUser("login");
	return (
		<>
			<IconButton
				onClick={handleOpenNavMenu}
				aria-controls="menu-appbar"
				aria-haspopup="true"
			>
				{user ? <AccountCircle /> : <PersonOutline />}
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				keepMounted
				open={Boolean(anchorElNav)}
				onClose={handleCloseNavMenu}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "left",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Box sx={style}>
					{user && (
						<>
							<NavCustomLink to={ROUTES.USER_PROFILE} label="My Profile" />
							<NavCustomLink to={ROUTES.EDIT_USER} label="Edit Profile" />
							<NavCustomLink
								to={ROUTES.LOGIN}
								label="Log Out"
								action={handleLogout}
							/>
						</>
					)}
					<NavCustomLink to="about" label="About" />
					{!user && (
						<>
							<NavCustomLink to={ROUTES.LOGIN} label="Log In" />
							<NavCustomLink to={ROUTES.SIGNUP} label="Sign Up" />
						</>
					)}
				</Box>
			</Menu>
		</>
	);
};

export default MenuBar;
