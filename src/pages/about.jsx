import React, { Fragment } from 'react';
import ReactHintFactory from 'react-hint';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Dog from '../components/images/dog';
import Cats from '../components/images/cats';

const ReactHint = ReactHintFactory(React);

const onRenderContent = (target) => {
    const { rhImage } = target.dataset;

    return (
        <div className="react-hint__image">
            {rhImage === 'cats' ? <Cats /> : <Dog />}
            <p>{rhImage === 'cats' ? 'Salem, Kiki and Mike' : 'Amelia'}</p>
        </div>
    );
};

const About = () => (
    <Fragment>
        <ReactHint autoPosition events />
        <ReactHint
            autoPosition
            events
            attribute="data-rh-image"
            onRenderContent={onRenderContent}
        />
        <Layout>
            <SEO title="About" />
            <section>
                <p>
                    Hi! I'm Eduardo.{' '}
                    <span data-rh="Laravel, React">Full stack developer</span>{' '}
                    living in Mexico City, currently working remotely at{' '}
                    <OutboundLink href="https://gumgum.com/sports">
                        GumGum Sports
                    </OutboundLink>
                </p>
                <p>
                    Proudly married to a great{' '}
                    <OutboundLink href="https://www.instagram.com/melissacastillo_photo/">
                        photographer
                    </OutboundLink>
                    , we have{' '}
                    <span data-rh-image="cats" data-rh-image-at="bottom">
                        3 cats
                    </span>{' '}
                    and{' '}
                    <span data-rh-image="dog" data-rh-image-at="bottom">
                        a dog
                    </span>
                </p>
            </section>
        </Layout>
    </Fragment>
);

export default About;
