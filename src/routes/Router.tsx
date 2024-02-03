import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES from './helpers/ROUTES';
import CardsPage from '../cards/pages/CardsPage';

const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.ROOT} />
            <Route path={ROUTES.CARDS} element={<CardsPage />} />
        </Routes>
    );
};

export default Router;