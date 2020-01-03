import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import mainStyles from '../styles/global';

import Footer from './Footer';
import Navigation from './Navigation';

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;

    & > * {
        flex: 1 100%;
    }
`;

const Layout: React.FC = ({ children }) => {
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
                <main>{children}</main>
                <Footer />
            </Container>
        </>
    );
};

export default Layout;
