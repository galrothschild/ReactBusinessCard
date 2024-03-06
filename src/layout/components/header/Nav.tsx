import React, { memo } from "react";
import CustomLink from "../../../routes/helpers/CustomLink";
import Logo from "./Logo";
import ROUTES from "../../../routes/helpers/ROUTES";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Box, IconButton, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavCustomLink from "../../../routes/helpers/NavCustomLink";

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
					aria-controls="nav"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="nav"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
					sx={{ maxWidth: "80%" }}
				>
					<NavCustomLink to={ROUTES.ROOT} action={handleClose} label="Home" />

					<NavCustomLink to={ROUTES.ABOUT} action={handleClose} label="About" />

					{isLoggedIn && (
						<NavCustomLink
							to={ROUTES.FAV_CARDS}
							action={handleClose}
							label="Fav Cards"
						/>
					)}
					{isLoggedIn && isBusiness && (
						<NavCustomLink
							to={ROUTES.MY_CARDS}
							action={handleClose}
							label="My Cards"
						/>
					)}
					{isAdmin && (
						<NavCustomLink to={ROUTES.CRM} action={handleClose} label="CRM" />
					)}
				</Menu>
			</Box>
		</div>
	);
};

export default memo(Nav);
