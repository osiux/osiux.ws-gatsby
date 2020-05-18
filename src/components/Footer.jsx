import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = tw.footer`bg-footer text-gray-100 pt-5 pb-1 px-4 text-center transition-colors duration-500 ease-linear`;

const StyledLink = styled(OutboundLink)`
    ${tw`text-white`}
`;

const Footer = () => (
    <FooterComponent>
        <p>
            © {new Date().getFullYear()}, Made with{' '}
            <span
                role="img"
                aria-label="heart"
                css={css`
                    ${tw`text-red-600`}
                `}
            >
                ❤️
            </span>{' '}
            , cats and{' '}
            <StyledLink href="https://www.gatsbyjs.org">Gatsby</StyledLink>.{' '}
            <StyledLink
                href="https://github.com/osiux/osiux.ws"
                title="Github Repository"
            >
                <FontAwesomeIcon icon={faGithub} fixedWidth />
            </StyledLink>
        </p>
    </FooterComponent>
);

export default Footer;
