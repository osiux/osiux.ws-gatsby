import React from 'react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { breakpoints } from '../styles/variables';

const FooterComponent = styled.footer`
    text-align: center;
    font-size: 14px;
    border-top: 1px dotted #000;
    padding-top: 10px;
    flex: 0 1 80%;
    margin: 0 auto;

    ${breakpoints.desktop} {
        flex: 1 0 100%;
    }
`;

const Footer = () => (
    <FooterComponent>
        <p>
            © {new Date().getFullYear()}, Made with{' '}
            <span role="img" aria-label="heart">
                ❤️
            </span>{' '}
            , cats and{' '}
            <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>.{' '}
            <OutboundLink
                href="https://github.com/osiux/osiux.ws"
                title="Github Repository"
            >
                <FontAwesomeIcon icon={faGithub} fixedWidth />
            </OutboundLink>
        </p>
    </FooterComponent>
);

export default Footer;
