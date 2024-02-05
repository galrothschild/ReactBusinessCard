import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './helpers/ROUTES';
import CardsPage from '../cards/pages/CardsPage';
import ErrorPage from '../pages/ErrorPage';
import AboutPage from '../pages/AboutPage';
import CardDetailPage from '../cards/pages/CardDetailPage';

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} element={<CardsPage />} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
            <Route path={ROUTES.ABOUT} element={<AboutPage />} />
            <Route path={`${ROUTES.CARD_DETAILS}/:id`} element={<CardDetailPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    );
};

export default Router;