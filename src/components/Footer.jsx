import React from 'react';
import styled from '@emotion/styled';

const FooterComponent = styled.footer`
    text-align: center;
    font-size: 15px;
`;

const Footer = () => (
    <FooterComponent>
        <p>
            Made with <span role="img" aria-label="heart">❤️</span> and cats. © {new Date().getFullYear()}, built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
    </FooterComponent>
);

export default Footer;
