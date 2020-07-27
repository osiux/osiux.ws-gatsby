import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Section = tw.section`min-w-full`;

const Uses = () => (
    <Layout>
        <SEO title="Uses" />

        <Section>
            <h1>Uses</h1>
            <p>
                Inspired by{' '}
                <OutboundLink href="https://wesbos.com/uses/">
                    Wes Bos
                </OutboundLink>
                , here is a list of hardware and software I use.
            </p>
            <h2>Hardware</h2>
            <ul>
                <li>
                    Lenovo T450s running{' '}
                    <OutboundLink href="https://www.archlinux.org/">
                        ArchLinux
                    </OutboundLink>{' '}
                    mainly for dev work.
                </li>
                <li>
                    Custom built PC with two monitors, dual boot Windows 10/
                    <OutboundLink href="https://www.archlinux.org/">
                        ArchLinux
                    </OutboundLink>{' '}
                    that I use for gaming and work.
                </li>
            </ul>
            <h2>Software</h2>
            <ul>
                <li>
                    <OutboundLink href="https://code.visualstudio.com/">
                        VSCode
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink href="https://code.launchpad.net/terminator">
                        Terminator
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink href="https://www.mozilla.org/en-US/firefox/developer/">
                        Firefox Developer Edition
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink href="https://www.zsh.org/">ZSH</OutboundLink>{' '}
                    and{' '}
                    <OutboundLink href="https://github.com/sorin-ionescu/prezto">
                        Prezto
                    </OutboundLink>
                </li>
                <li>
                    <OutboundLink href="https://bitwarden.com/">
                        Bitwarden
                    </OutboundLink>
                </li>
            </ul>
            <p>
                <Link to="/about">← Back to About</Link>
            </p>
        </Section>
    </Layout>
);

export default Uses;
