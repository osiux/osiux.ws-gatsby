import React from 'react';
import tw from 'twin.macro';
import { useStaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

import Footer from './Footer';
import Navigation from './Navigation';

import { DarkModeProvider } from '../context/DarkModeContext';

const Container = styled.div`
    ${tw`font-sans my-0 mx-auto flex flex-row flex-wrap max-w-screen-lg`}
    /* max-width: 900px; */

    & > * {
        ${tw`flex-initial`}
        /* flex: 1 100%; */
    }
`;

const Main = styled.main`
    ${tw`max-w-full py-0 pt-4 pb-2`}

    ${(props) => props.theme.breakpoints.desktop} {
        margin-top: 10px;
        padding: 0;
    }
`;

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
            <Container>
                <Navigation siteTitle={data.site.siteMetadata.title} />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </DarkModeProvider>
    );
};

export default Layout;
