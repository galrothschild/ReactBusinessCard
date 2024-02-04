import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';
interface Props {
    children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
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