import { Navigate, Route, Routes } from "react-router-dom";
import ROUTES from "./helpers/ROUTES";
import CardsPage from "../cards/pages/CardsPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import LoginPage from "../users/pages/LoginPage";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={`${ROUTES.CARD_DETAILS}/:id`} element={<CardDetailPage />} />
      <Route path="404" element={<ErrorPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path="*" element={<Navigate replace to={"404"} />} />
    </Routes>
  );
};

export default Router;
