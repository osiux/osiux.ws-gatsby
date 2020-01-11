import React from 'react';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

const Uses = () => (
    <Layout>
        <SEO title="Uses" />

        <section>
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
                    Lenovo T420s running{' '}
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
                    <OutboundLink href="https://keepassxc.org/">
                        KeepassXC
                    </OutboundLink>{' '}
                    that gets synced with{' '}
                    <OutboundLink href="https://www.dropbox.com/">
                        Dropbox
                    </OutboundLink>{' '}
                    and{' '}
                    <OutboundLink href="https://play.google.com/store/apps/details?id=keepass2android.keepass2android&hl=en_US">
                        Keepass2Android
                    </OutboundLink>{' '}
                    on my cellphone. Trying{' '}
                    <OutboundLink href="https://bitwarden.com/">
                        Bitwarden
                    </OutboundLink>{' '}
                    to see if I like it.
                </li>
            </ul>
            <p>
                <Link to="/about">← Back to About</Link>
            </p>
        </section>
    </Layout>
);

export default Uses;
