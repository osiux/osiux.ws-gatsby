import React from 'react';
import tw from 'twin.macro';
import { Global } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';

import Footer from './Footer';
import Navigation from './Navigation';

import { DarkModeProvider } from '../context/DarkModeContext';

import global from '../styles/global';

const Container = tw.div`container mx-auto`;

const Main = tw.main`max-w-full py-0 pt-4 pb-2 shadow-2xl md:p-5 md:mt-2`;

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <DarkModeProvider>
            <Global styles={global} />
            <Container>
                <Navigation siteTitle={data.site.siteMetadata.title} />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </DarkModeProvider>
    );
};

export default Layout;
