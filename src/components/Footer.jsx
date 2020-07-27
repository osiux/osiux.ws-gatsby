import React, { useContext } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { DarkModeContext } from '../context/DarkModeContext';

const FooterComponent = styled.footer(({ dark }) => [
    tw`text-gray-900 pt-5 pb-1 px-4 text-center transition-colors duration-500 ease-linear prose max-w-none`,
    dark && tw`text-gray-100`,
]);

const StyledLink = tw.a`transition-colors duration-500 ease-linear`;

const Footer = () => {
    const { dark } = useContext(DarkModeContext);

    return (
        <FooterComponent dark={dark}>
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
};

export default Footer;
