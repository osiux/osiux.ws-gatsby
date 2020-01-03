import React from 'react';
import styled from '@emotion/styled';

const FooterComponent = styled.footer`
    text-align: center;
    font-size: 15px;
`;

const Footer: React.FC = () => (
    <FooterComponent>
        <p>
            Made with ❤️ and cats. © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
        </p>
    </FooterComponent>
);

export default Footer;
