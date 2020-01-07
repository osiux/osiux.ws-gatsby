import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import { colors, breakpoints } from '../styles/variables';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    ${breakpoints.desktop} {
        justify-content: space-between;
        align-items: center;
    }
`;

const ToggleButton = styled.button`
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    outline: 0;
    order: 2;
    align-self: flex-end;
    margin: 3px 10px 0 0;

    ${breakpoints.desktop} {
        display: none;
    }
`;

const NavListItem = styled.li`
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;

    ${breakpoints.desktop} {
        width: auto;
        display: block;
    }
`;

const NavLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 5px 0;
    color: ${colors.secondary};
    font-family: 'Oswald', sans-serif;
    width: 100%;

    &:hover {
        text-decoration: underline;
    }

    ${breakpoints.desktop} {
        padding: 10px 15px;
    }
`;

const Navigation = ({ siteTitle }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const _toggleMenu = () => setMenuOpen(prev => !prev);

    const NavList = styled.ul`
        list-style: none;
        display: ${menuOpen ? 'flex' : 'none'};
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100%;
        order: 3;

        ${breakpoints.desktop} {
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
                css={css`
                    align-self: flex-start;
                    padding-left: 10px;
                    display: inline-block;
                    color: ${colors.secondary};
                    font-size: 30px;
                    text-decoration: none;
                    text-transform: capitalize;
                    font-family: 'Oswald', sans-serif;
                    order: 1;
                    width: auto;
                    outline: none;

                    @media all and (min-width: 900px) {
                        padding: 5px 0 0;
                    }
                `}
            >
                {siteTitle}
            </Link>
            <ToggleButton
                role="button"
                aria-label="Toggle Menu"
                onClick={_toggleMenu}
            >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </ToggleButton>
            <NavList>
                <NavListItem>
                    <NavLink
                        to="/articles/"
                        activeClassName="current"
                        partiallyActive
                    >
                        Articles
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/about/" activeClassName="current">
                        About
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/contact/" activeClassName="current">
                        Contact
                    </NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    );
};

export default Navigation;
