import React, { useEffect } from 'react';
import tw from 'twin.macro';
import { navigate } from 'gatsby';
import { useStaticQuery, graphql } from 'gatsby';
import { parse } from 'query-string';
import { useFlexSearch } from 'react-use-flexsearch';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import useDebounce from '../hooks/useDebounce';

import SimplePost from '../components/posts/SimplePost';

const Section = tw.section`min-w-full`;

const SearchInput = tw.input`border-2 border-gray-300 bg-gray-200 h-10 px-3 pr-8 rounded-lg text-sm focus:outline-none w-full mb-4`;

const Search = ({ location }) => {
    const { q } = parse(location.search);
    const [debouncedQuery, query, setQuery] = useDebounce(q || '', 500);

    const { localSearchPosts } = useStaticQuery(graphql`
        {
            localSearchPosts {
                index
                store
            }
        }
    `);

    const results = useFlexSearch(
        debouncedQuery,
        localSearchPosts.index,
        JSON.parse(localSearchPosts.store),
    );

    useEffect(() => {
        const searchTerm = debouncedQuery.trim();

        if (searchTerm.length > 0) {
            setQuery(searchTerm);
            navigate(`/search?q=${searchTerm}`);
        }
    }, [debouncedQuery, setQuery]);

    return (
        <Layout>
            <SEO title="Search results" />

            <Section className="prose">
                <h1>
                    Search Results for: <strong>{debouncedQuery}</strong>
                </h1>

                <SearchInput
                    placeholder="What do you want to find?"
                    type="search"
                    name="q"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />

                {results.length === 0 && <p>Nothing matches your search.</p>}

                {results.length > 0 &&
                    results.map((article) => (
                        <SimplePost key={article.id} {...article} />
                    ))}
            </Section>
        </Layout>
    );
};

export default Search;
