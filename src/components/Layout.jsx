import React from 'react';
import tw from 'twin.macro';
import { css, Global } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Footer from './Footer';
import Navigation from './Navigation';

import { DarkModeProvider } from '../context/DarkModeContext';

const Container = styled.div`
    ${tw`my-0 mx-auto flex flex-row flex-wrap max-w-screen-lg`}
    /* max-width: 900px; */

    & > * {
        ${tw`flex-initial`}/* flex: 1 100%; */
    }
`;

const Main = tw.main`max-w-full py-0 pt-4 pb-2 md:p-0 md:mt-2`;

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
            <Global
                styles={css`
                    body {
                        ${tw`bg-white font-serif`};
                    }
                `}
            />
            <Container>
                <Navigation siteTitle={data.site.siteMetadata.title} />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </DarkModeProvider>
    );
};

export default Layout;
