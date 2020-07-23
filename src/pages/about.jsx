import React, { Fragment } from 'react';
import ReactHintFactory from 'react-hint';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Dog from '../components/images/dog';
import Cats from '../components/images/cats';
import Me from '../components/images/me';

const ReactHint = ReactHintFactory(React);

const UnderlineSpan = tw.span`cursor-pointer border-b border-secondary border-dotted transition-colors
duration-500 
ease-linear`;

const ImageCaption = tw.p`text-center`;

const onRenderContent = (target) => {
    const { rhImage } = target.dataset;

    return (
        <div className="react-hint__image">
            {rhImage === 'cats' ? <Cats /> : <Dog />}
            <ImageCaption>
                {rhImage === 'cats' ? 'Salem, Mike and Kiki' : 'Amelia'}
            </ImageCaption>
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
                <Me />
                <p>
                    Hi! I'm Eduardo.{' '}
                    <UnderlineSpan data-rh="Laravel, React">
                        Full Stack Developer
                    </UnderlineSpan>{' '}
                    living in Mexico City, currently working as Web Engineer at{' '}
                    <OutboundLink href="https://mav.farm/">
                        MavFarm
                    </OutboundLink>
                    .
                </p>
                <p>
                    Proudly married to a great{' '}
                    <OutboundLink href="https://www.instagram.com/melissacastillo_photo/">
                        photographer
                    </OutboundLink>
                    , we have{' '}
                    <UnderlineSpan
                        data-rh-image="cats"
                        data-rh-image-at="bottom"
                    >
                        3 cats
                    </UnderlineSpan>{' '}
                    and{' '}
                    <UnderlineSpan
                        data-rh-image="dog"
                        data-rh-image-at="bottom"
                    >
                        a dog
                    </UnderlineSpan>
                </p>
                <p>
                    Right now I do mostly Javascript, but for the majority of my
                    career PHP was my main language.
                </p>
                <p>
                    <Link to="/about/uses">My Uses page.</Link>
                </p>
            </section>
        </Layout>
    </Fragment>
);

export default About;
