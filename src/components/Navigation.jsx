import React, { useState, useContext } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
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

const Nav = styled.nav`
    ${tw`flex flex-row justify-start items-center flex-wrap mb-2`}

    ${(props) => props.theme.breakpoints.desktop} {
        justify-content: flex-end;
        align-items: center;
    }
`;

const DarkModeButton = styled.button`
    ${tw`bg-transparent p-0 border-0 order-2 outline-none m-0 mt-4`};
    color: ${(props) => props.theme.colors.text};
    transition: color ${(props) => props.theme.transition};

    ${(props) => props.theme.breakpoints.desktop} {
        order: 3;
    }
`;

const ToggleMenuButton = styled.button`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.text};
    border-radius: 0.25rem;
    color: ${(props) => props.theme.colors.text};
    cursor: pointer;
    outline: 0;
    order: 3;
    margin: 3px 10px 0 0;

    ${(props) => props.theme.breakpoints.desktop} {
        display: none;
    }
`;

const NavListItem = styled.li`
    ${tw`m-0 p-0 w-full text-center`}

    ${(props) => props.theme.breakpoints.desktop} {
        width: auto;
        display: block;
    }
`;

const NavLink = styled(Link)`
    ${tw`inline-block no-underline w-full`}
    padding: 5px 0;
    color: ${(props) => props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    transition: ${(props) => `color ${props.theme.transition}`};

    &:hover {
        ${tw`underline`};
    }

    ${(props) => props.theme.breakpoints.desktop} {
        padding: 10px 15px;
    }
`;

const Navigation = ({ siteTitle }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { dark, toggle } = useContext(DarkModeContext);

    const _toggleMenu = () => setMenuOpen((prev) => !prev);

    const NavList = styled.ul`
        list-style: none;
        display: ${menuOpen ? 'flex' : 'none'};
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100%;
        order: 3;

        ${(props) => props.theme.breakpoints.desktop} {
            order: 2;
            width: auto;
            display: flex;
            flex-flow: row wrap;
            justify-content: flex-end;
        }

        .current {
            text-decoration: underline;
        }
    `;

    return (
        <Nav>
            <Link
                to="/"
                css={(theme) => css`
                    align-self: flex-start;
                    padding: 5px 0 0 10px;
                    display: inline-block;
                    color: ${theme.colors.text};
                    font-size: 30px;
                    text-decoration: none;
                    text-transform: capitalize;
                    font-family: 'Oswald', sans-serif;
                    order: 1;
                    width: auto;
                    outline: none;
                    flex-grow: 1;
                    transition: color ${theme.transition};

                    ${theme.breakpoints.desktop} {
                        padding: 5px 0 0;
                    }
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
                <NavListItem>
                    <NavLink
                        to="/blog"
                        activeClassName="current"
                        partiallyActive
                    >
                        Blog
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink
                        to="/about"
                        activeClassName="current"
                        partiallyActive
                    >
                        About
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/contact" activeClassName="current">
                        Contact
                    </NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    );
};

export default Navigation;
