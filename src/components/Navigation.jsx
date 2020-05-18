import React, { useState, useContext } from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faTimes,
    faSun,
    faMoon,
} from '@fortawesome/free-solid-svg-icons';

import { DarkModeContext } from '../context/DarkModeContext';

const Nav = tw.nav`flex items-center bg-header p-3 flex-wrap border-b border-black h-auto transition-colors duration-500 ease-linear`;

const DarkModeButton = tw.button`
    bg-transparent
    inline-flex
    p-3
    ml-auto
    outline-none
    text-secondary
    transition-colors
    duration-500 
    ease-linear
    md:order-3
`;

const ToggleMenuButton = tw.button`
    text-secondary inline-flex p-3 rounded md:hidden ml-0 outline-none
    transition-colors
    duration-500 
    ease-linear
`;

const NavLink = styled(Link)`
    ${tw`w-full px-3 py-2 text-secondary items-center justify-center hover:underline md:inline-flex md:w-auto 
    transition-colors
    duration-500 
    ease-linear`}

    .current {
        ${tw`underline`}
    }
`;

const LinksContainer = tw.div`w-full items-start flex flex-col md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto`;

const Navigation = ({ siteTitle }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { dark, toggle } = useContext(DarkModeContext);

    const _toggleMenu = () => setMenuOpen((prev) => !prev);

    const NavList = styled.div`
        ${tw`hidden w-full md:inline-flex md:flex-grow md:w-auto`}
        display: ${menuOpen ? 'block' : 'none'};

        .current {
            ${tw`underline`};
        }
    `;

    return (
        <Nav>
            <Link
                to="/"
                css={css`
                    ${tw`text-xl text-secondary font-bold transition-colors duration-500 ease-linear`}
                `}
            >
                {siteTitle}
            </Link>
            <DarkModeButton
                role="button"
                aria-label="Toggle Dark Mode"
                onClick={toggle}
            >
                <FontAwesomeIcon icon={dark ? faSun : faMoon} />
            </DarkModeButton>
            <ToggleMenuButton
                role="button"
                aria-label="Toggle Menu"
                onClick={_toggleMenu}
            >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </ToggleMenuButton>
            <NavList>
                <LinksContainer>
                    <NavLink
                        to="/blog"
                        activeClassName="current"
                        partiallyActive
                    >
                        Blog
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeClassName="current"
                        partiallyActive
                    >
                        About
                    </NavLink>
                    <NavLink to="/contact" activeClassName="current">
                        Contact
                    </NavLink>
                </LinksContainer>
            </NavList>
        </Nav>
    );
};

export default Navigation;
