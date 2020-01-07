import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import mainStyles from '../styles/global';
import { breakpoints } from '../styles/variables';

import Footer from './Footer';
import Navigation from './Navigation';

const Container = styled.div`
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;

    & > * {
        flex: 1 100%;
    }
`;

const Main = styled.main`
    padding: 0 15px 0 10px;
    max-width: 100%;

    ${breakpoints.desktop} {
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
        <>
            <Global styles={mainStyles} />
            <Container>
                <Navigation siteTitle={data.site.siteMetadata.title} />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
