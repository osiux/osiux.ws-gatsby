import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    ${props => props.theme.breakpoints.desktop} {
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

    ${props => props.theme.breakpoints.desktop} {
        display: none;
    }
`;

const NavListItem = styled.li`
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;

    ${props => props.theme.breakpoints.desktop} {
        width: auto;
        display: block;
    }
`;

const NavLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    padding: 5px 0;
    color: ${props => props.theme.colors.text};
    font-family: 'Oswald', sans-serif;
    width: 100%;

    &:hover {
        text-decoration: underline;
    }

    ${props => props.theme.breakpoints.desktop} {
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

        ${props => props.theme.breakpoints.desktop} {
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
                css={theme => css`
                    align-self: flex-start;
                    padding-left: 10px;
                    display: inline-block;
                    color: ${theme.colors.text};
                    font-size: 30px;
                    text-decoration: none;
                    text-transform: capitalize;
                    font-family: 'Oswald', sans-serif;
                    order: 1;
                    width: auto;
                    outline: none;

                    ${theme.breakpoints.desktop} {
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
