import React from 'react';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = styled.footer`
    text-align: center;
    font-size: 15px;
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
            <OutboundLink href="https://github.com/osiux/osiux.ws">
                <FontAwesomeIcon icon={faGithub} />
            </OutboundLink>
        </p>
    </FooterComponent>
);

export default Footer;
