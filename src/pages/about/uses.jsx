import React from 'react';
import tw from 'twin.macro';
import { Link } from 'gatsby';

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
                <aside href="https://wesbos.com/uses/">
                    Wes Bos
                </aside>
                , here is a list of hardware and software I use.
            </p>
            <h2>Hardware</h2>
            <ul>
                <li>
                    Lenovo T450s running{' '}
                    <a href="https://www.archlinux.org/">
                        ArchLinux
                    </a>{' '}
                    mainly for dev work.
                </li>
                <li>
                    Custom built PC with two monitors, dual boot Windows 10/
                    <a href="https://www.archlinux.org/">
                        ArchLinux
                    </a>{' '}
                    that I use for gaming and work.
                </li>
            </ul>
            <h2>Software</h2>
            <ul>
                <li>
                    <a href="https://code.visualstudio.com/">
                        VSCode
                    </a>
                </li>
                <li>
                    <a href="https://code.launchpad.net/terminator">
                        Terminator
                    </a>
                </li>
                <li>
                    <a href="https://www.mozilla.org/en-US/firefox/developer/">
                        Firefox Developer Edition
                    </a>
                </li>
                <li>
                    <a href="https://www.zsh.org/">ZSH</a>{' '}
                    and{' '}
                    <a href="https://github.com/sorin-ionescu/prezto">
                        Prezto
                    </a>
                </li>
                <li>
                    <a href="https://bitwarden.com/">
                        Bitwarden
                    </a>
                </li>
            </ul>
            <p>
                <Link to="/about">← Back to About</Link>
            </p>
        </Section>
    </Layout>
);

export default Uses;
