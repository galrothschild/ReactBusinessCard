import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./helpers/ROUTES";
import CardsPage from "../cards/pages/CardsPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MyCardsPage from "../cards/pages/MyCardsPage";
import FavCardsPage from "../cards/pages/FavCardsPage";
import CreateCardPage from "../cards/pages/CreateCardPage";
import EditCardPage from "../cards/pages/EditCardPage";
import ProfilePage from "../users/pages/ProfilePage";
import EditUserPage from "../users/pages/EditUserPage";
import CRMPage from "../users/pages/CRMPage";

const Router = () => {
	const {
		isLoggedIn,
		user: { isAdmin, isBusiness },
	} = useSelector((state: RootState) => state.user);
	return (
		<Routes>
			<Route
				path={ROUTES.CREATE_CARD}
				element={
					isLoggedIn && isBusiness ? (
						<CreateCardPage />
					) : (
						<Navigate replace to={ROUTES.ROOT} />
					)
				}
			/>
			<Route
				path={`${ROUTES.EDIT_CARD}/:id`}
				element={
					isLoggedIn && isBusiness ? (
						<EditCardPage />
					) : (
						<Navigate replace to={ROUTES.ROOT} />
					)
				}
			/>
			<Route path={ROUTES.ROOT} element={<CardsPage />} />
			<Route
				path={ROUTES.CARDS}
				element={
					isLoggedIn ? <CardsPage /> : <Navigate replace to={ROUTES.LOGIN} />
				}
			/>
			<Route path={ROUTES.ABOUT} element={<AboutPage />} />
			<Route
				path={`${ROUTES.CARD_DETAILS}/:id`}
				element={
					isLoggedIn ? (
						<CardDetailPage />
					) : (
						<Navigate replace to={ROUTES.LOGIN} />
					)
				}
			/>
			<Route
				path={`${ROUTES.MY_CARDS}`}
				element={
					isLoggedIn ? <MyCardsPage /> : <Navigate replace to={ROUTES.LOGIN} />
				}
			/>
			<Route
				path={`${ROUTES.FAV_CARDS}`}
				element={
					isLoggedIn ? <FavCardsPage /> : <Navigate replace to={ROUTES.LOGIN} />
				}
			/>
			<Route
				path={`${ROUTES.USER_PROFILE}/:id?`}
				element={
					isLoggedIn ? <ProfilePage /> : <Navigate replace to={ROUTES.LOGIN} />
				}
			/>
			<Route
				path={`${ROUTES.EDIT_USER}/:id`}
				element={
					isLoggedIn ? <EditUserPage /> : <Navigate replace to={ROUTES.LOGIN} />
				}
			/>
			<Route
				path={`${ROUTES.CRM}`}
				element={isAdmin ? <CRMPage /> : <Navigate replace to={ROUTES.LOGIN} />}
			/>

			<Route path="404" element={<ErrorPage />} />
			<Route path={ROUTES.LOGIN} element={<LoginPage />} />
			<Route path={ROUTES.SIGNUP} element={<SignupPage />} />
			<Route path="*" element={<Navigate replace to={"404"} />} />
		</Routes>
	);
};

export default Router;
