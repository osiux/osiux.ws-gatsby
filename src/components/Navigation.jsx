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

const Nav = tw.nav`flex items-center bg-gray-900 text-gray-100 p-3 flex-wrap border-b border-black h-auto w-full z-10`;

const NavLink = styled(Link)`
    ${tw`w-full px-3 py-2 text-gray-100 items-center justify-center hover:underline md:inline-flex md:w-auto`}
`;

const NavList = styled.div(({ open }) => [
    tw`hidden w-full md:inline-flex md:flex-grow md:w-auto`,
    open && tw`block`,
    `.current {
        ${tw`underline`}
    }`,
]);

const DarkModeButton = tw.button`bg-transparent inline-flex p-3 ml-auto outline-none text-gray-100 md:order-3`;

const ToggleMenuButton = tw.button`inline-flex p-3 rounded md:hidden ml-0 outline-none transition-colors duration-500 ease-linear`;

const LinksContainer = tw.div`w-full items-start flex flex-col md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto`;

const Navigation = ({ siteTitle }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { dark, toggle } = useContext(DarkModeContext);

    const _toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <Nav id="header">
            <Link
                to="/"
                css={css`
                    ${tw`text-xl text-gray-100 font-bold`}
                `}
            >
                {siteTitle}
            </Link>
            {/* <DarkModeButton
                role="button"
                aria-label="Toggle Dark Mode"
                onClick={toggle}
            >
                <FontAwesomeIcon icon={dark ? faSun : faMoon} />
            </DarkModeButton> */}
            <ToggleMenuButton
                role="button"
                aria-label="Toggle Menu"
                onClick={_toggleMenu}
            >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </ToggleMenuButton>
            <NavList open={menuOpen}>
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
