import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { AccountBoxOutlined, Favorite, Info } from "@mui/icons-material";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/helpers/ROUTES";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Footer = () => {
	const navigate = useNavigate();
	const { isBusiness } = useSelector((state: RootState) => state.user.user);
	const resolvedPath = useLocation();
	const route = useMatch({
		path: resolvedPath.pathname,
		end: true,
	})?.pathname;
	return (
		<BottomNavigation
			className="fixed bottom-0 w-full"
			sx={{ boxShadow: 3, zIndex: 10 }}
		>
			<BottomNavigationAction
				label="About"
				value="About"
				icon={<Info color={route === ROUTES.ABOUT ? "info" : "inherit"} />}
				onClick={() => navigate(ROUTES.ABOUT)}
			/>
			<BottomNavigationAction
				label="Favorites"
				value="Favorites"
				icon={
					<Favorite color={route === ROUTES.FAV_CARDS ? "error" : "inherit"} />
				}
				onClick={() => navigate(ROUTES.FAV_CARDS)}
			/>
			{isBusiness && (
				<BottomNavigationAction
					label="My cards"
					value="My cards"
					icon={
						<AccountBoxOutlined
							color={route === ROUTES.MY_CARDS ? "warning" : "inherit"}
						/>
					}
					onClick={() => navigate(ROUTES.MY_CARDS)}
				/>
			)}
		</BottomNavigation>
	);
};

export default Footer;
