import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

import { colors, breakpoints } from '../styles/variables';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

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
    outline: none;
    order: 2;
    align-self: flex-end;
    margin: 3px 10px 0 0;

    ${breakpoints.desktop} {
        display: none;
    }
`;

const ToggleButtonIcon = styled.span`
    display: inline-block;
    width: 1em;
    vertical-align: middle;
    height: 1em;
    content: '';
    background: no-repeat center center;
    background-size: 100% 100%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
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
        font-weight: bold;
    }
`;

const navLinkStyleActive = css`
    text-decoration: underline;
`;

type NavigationProps = {
    siteTitle: string;
};

const Navigation: React.FC<NavigationProps> = ({
    siteTitle,
}: NavigationProps) => {
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
                    outline: 0;

                    @media all and (min-width: 900px) {
                        padding: 0;
                    }
                `}
            >
                {siteTitle}
            </Link>
            <ToggleButton role="button" onClick={_toggleMenu}>
                <ToggleButtonIcon />
            </ToggleButton>
            <NavList>
                <NavListItem>
                    <NavLink
                        to="/projects/"
                        activeStyle={navLinkStyleActive}
                        partiallyActive
                    >
                        Projects
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/about/" activeStyle={navLinkStyleActive}>
                        About
                    </NavLink>
                </NavListItem>
                <NavListItem>
                    <NavLink to="/contact/" activeStyle={navLinkStyleActive}>
                        Contact
                    </NavLink>
                </NavListItem>
            </NavList>
        </Nav>
    );
};

export default Navigation;
