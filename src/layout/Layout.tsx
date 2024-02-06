import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
import { PropsWithChildren } from '../interfaces';
const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    );
};

export default Layout;