import React from 'react';
import tw from '@tailwindcssinjs/macro';
import styled from '@emotion/styled';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = styled.footer`
    ${tw`text-center my-0 mx-auto flex-grow-0 md:flex-grow flex-shrink md:flex-shrink-0 pt-5 border-t border-dotted border-black`};
    font-size: 14px;
    flex-basis: 80%;

    ${(props) => props.theme.breakpoints.desktop} {
        flex-basis: 100%;
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
