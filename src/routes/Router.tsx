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

const Router = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  return (
    <Routes>
      <Route
        path={ROUTES.ROOT}
        element={
          isLoggedIn ? <CardsPage /> : <Navigate replace to={ROUTES.LOGIN} />
        }
      />
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

      <Route path="404" element={<ErrorPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path="*" element={<Navigate replace to={"404"} />} />
    </Routes>
  );
};

export default Router;
