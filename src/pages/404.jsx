import React from 'react';
import styled from '@emotion/styled';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Salem from '../components/images/salem';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    content-align: center;
    text-align: center;
`;

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Section>
            <Salem />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Section>
    </Layout>
);

export default NotFoundPage;
