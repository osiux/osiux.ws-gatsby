import React from 'react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faStackOverflow,
    faTwitter,
    faInstagram,
    faLastfm,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SocialNetworksList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 2rem;
`;

const Contact = () => (
    <Layout>
        <SEO title="Contact" />

        <section>
            <p>
                If you want to get in touch with me for professional projects or
                anything else, feel free to reach out at{' '}
                <a href="me@osiux.ws?subject=Hello!">me@osiux.ws</a> or in any
                of my social networks:
            </p>
            <SocialNetworksList>
                <li>
                    <OutboundLink
                        href="https://github.com/osiux"
                        title="Github"
                    >
                        <FontAwesomeIcon icon={faGithub} fixedWidth />
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink
                        href="https://www.linkedin.com/in/ereveles/"
                        title="Linkedin"
                    >
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink
                        href="https://stackoverflow.com/users/717643/eduardo-reveles"
                        title="Stack Overflow"
                    >
                        <FontAwesomeIcon icon={faStackOverflow} fixedWidth />
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink
                        href="https://twitter.com/osiux"
                        title="Twitter"
                    >
                        <FontAwesomeIcon icon={faTwitter} fixedWidth />
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink
                        href="https://www.instagram.com/oso96_2000/"
                        title="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} fixedWidth />
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink
                        href="https://www.last.fm/user/oso96_2000"
                        title="Last.fm"
                    >
                        <FontAwesomeIcon icon={faLastfm} fixedWidth />
                    </OutboundLink>
                </li>
            </SocialNetworksList>
        </section>
    </Layout>
);

export default Contact;
