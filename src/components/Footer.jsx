import React from 'react';
import tw from 'twin.macro';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterComponent = tw.footer`bg-black text-white py-8 px-4 text-center transition-colors duration-500 ease-linear`;

const Footer = () => (
    <FooterComponent>
        <p>
            © {new Date().getFullYear()}, Made with{' '}
            <span role="img" aria-label="heart">
                ❤️
            </span>{' '}
            , cats and{' '}
            <OutboundLink href="https://www.gatsbyjs.org">Gatsby</OutboundLink>.{' '}
            <OutboundLink
                href="https://github.com/osiux/osiux.ws"
                title="Github Repository"
            >
                <FontAwesomeIcon icon={faGithub} fixedWidth />
            </OutboundLink>
        </p>
    </FooterComponent>
);

export default Footer;
