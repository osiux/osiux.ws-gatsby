import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStepBackward,
    faStepForward,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const PaginationContainer = styled.nav`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

const Paginator = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const Item = styled.li`
    margin: 0 5px;

    .disabled {
        color: #ccc;
    }

    &.number {
        display: none;

        ${props => props.theme.breakpoints.desktop} {
            display: inline-block;
        }
    }
`;

const ItemLink = styled(Link)`
    text-decoration: none;
    border: 1px solid ${props => props.theme.colors.text};
    padding: 2px 2px;
    min-width: 25px;
    text-align: center;
    font-size: 14px;
    display: inline-block;

    &.current {
        background: ${props => props.theme.colors.text};
        color: ${props => props.theme.colors.background};
    }
`;

const Pagination = ({ basePath, prefix, totalPages, currentPage }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const prevLink =
        isFirstPage || currentPage === 2
            ? basePath
            : `${basePath}${prefix}${currentPage - 1}`;
    const nextLink = isLastPage
        ? `${basePath}${prefix}${currentPage}`
        : `${basePath}${prefix}${currentPage + 1}`;

    return (
        <PaginationContainer>
            <Paginator>
                <Item>
                    {isFirstPage ? (
                        <FontAwesomeIcon
                            icon={faStepBackward}
                            color="#ccc"
                            fixedWidth
                        />
                    ) : (
                        <Link
                            title="First Page"
                            to={`${basePath}`}
                            className={currentPage === 1 ? 'disabled' : ''}
                        >
                            <FontAwesomeIcon icon={faStepBackward} fixedWidth />
                        </Link>
                    )}
                </Item>
                <Item>
                    {isFirstPage ? (
                        <FontAwesomeIcon
                            icon={faChevronLeft}
                            color="#ccc"
                            fixedWidth
                        />
                    ) : (
                        <Link
                            title="Previous Page"
                            to={prevLink}
                            className={currentPage === 1 ? 'disabled' : ''}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} fixedWidth />
                        </Link>
                    )}
                </Item>
                {[...Array(totalPages)].map((_val, page) => {
                    const pageLink =
                        page === 0
                            ? basePath
                            : `${basePath}${prefix}${page + 1}`;

                    return (
                        <Item key={page} className="number">
                            <ItemLink
                                title={`Go to Page ${page + 1}`}
                                to={pageLink}
                                className={
                                    currentPage === page + 1 ? 'current' : ''
                                }
                            >
                                {page + 1}
                            </ItemLink>
                        </Item>
                    );
                })}
                <Item>
                    {isLastPage ? (
                        <FontAwesomeIcon
                            icon={faChevronRight}
                            color="#ccc"
                            fixedWidth
                        />
                    ) : (
                        <Link
                            title="Next Page"
                            to={nextLink}
                            className={
                                currentPage === totalPages ? 'disabled' : ''
                            }
                        >
                            <FontAwesomeIcon icon={faChevronRight} fixedWidth />
                        </Link>
                    )}
                </Item>
                <Item>
                    {isLastPage ? (
                        <FontAwesomeIcon
                            icon={faStepForward}
                            color="#ccc"
                            fixedWidth
                        />
                    ) : (
                        <Link
                            title="Last Page"
                            to={`${basePath}${prefix}${totalPages}`}
                            className={
                                currentPage === totalPages ? 'disabled' : ''
                            }
                        >
                            <FontAwesomeIcon icon={faStepForward} fixedWidth />
                        </Link>
                    )}
                </Item>
            </Paginator>
        </PaginationContainer>
    );
};

Pagination.defaultProps = {
    basePath: '/blog/',
    prefix: 'page-',
};

export default Pagination;
