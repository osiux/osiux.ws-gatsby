import React from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStepBackward,
    faStepForward,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

const PaginationContainer = tw.nav`flex justify-center my-5`;

const Paginator = tw.ul`list-none m-0 p-0 flex`;

const Item = styled.li`
    ${tw`mx-1`}

    .disabled {
        ${tw`text-gray-800`}
    }

    &.number {
        ${tw`hidden md:inline-block`}
    }
`;

const ItemLink = styled(Link)`
    ${tw`no-underline text-center inline-block border border-solid border-secondary p-1 w-8 text-sm`}

    &.current {
        ${tw`bg-secondary text-primary`}
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
