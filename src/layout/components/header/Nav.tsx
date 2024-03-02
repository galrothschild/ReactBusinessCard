import React, { memo } from "react";
import CustomLink from "../../../routes/helpers/CustomLink";
import Logo from "./Logo";
import ROUTES from "../../../routes/helpers/ROUTES";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Box, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
	const {
		user: { isAdmin, isBusiness },
		isLoggedIn,
	} = useSelector((state: RootState) => state.user);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="flex gap-3">
			<Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
				<Logo />
				<CustomLink to={ROUTES.ABOUT}>About</CustomLink>
				{isLoggedIn && <CustomLink to={ROUTES.FAV_CARDS}>Fav Cards</CustomLink>}
				{isLoggedIn && isBusiness && (
					<CustomLink to={ROUTES.MY_CARDS}>My Cards</CustomLink>
				)}
				{isAdmin && <CustomLink to={ROUTES.CRM}>CRM</CustomLink>}
			</Box>
			<Box sx={{ display: { sm: "flex", md: "none" } }}>
				<IconButton
					aria-controls="menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>
						<CustomLink to={ROUTES.ABOUT}>About</CustomLink>
					</MenuItem>
					{isLoggedIn && (
						<MenuItem onClick={handleClose}>
							<CustomLink to={ROUTES.FAV_CARDS}>Fav Cards</CustomLink>
						</MenuItem>
					)}
					{isLoggedIn && isBusiness && (
						<MenuItem onClick={handleClose}>
							<CustomLink to={ROUTES.MY_CARDS}>My Cards</CustomLink>
						</MenuItem>
					)}
					{isAdmin && (
						<MenuItem onClick={handleClose}>
							<CustomLink to={ROUTES.CRM}>CRM</CustomLink>
						</MenuItem>
					)}
				</Menu>
			</Box>
		</div>
	);
};

export default memo(Nav);
