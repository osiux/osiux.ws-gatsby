import React, { useState } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';
import { css } from '@emotion/core';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
    faStackOverflow,
    faTwitter,
    faInstagram,
    faLastfm,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const SocialNetworksList = tw.ul`list-none flex justify-center m-0 text-3xl`;

const SocialNetworkItem = styled.li`
    ${tw`pl-3!`}
    &::before {
        ${tw`hidden!`}
    }
`;

const Form = tw.form`flex w-full flex-col md:w-4/5 mx-auto`;

const Field = tw.div`flex justify-end mb-4 flex-col md:flex-row md:flex-wrap`;

const Label = tw.label`w-full mb-2 md:w-1/4 md:mt-1`;

const baseInput = css`
    ${tw`w-full p-2 bg-primary text-secondary border border-solid border-secondary md:w-3/4`}
`;

const Input = styled.input`
    ${baseInput}
`;

const TextArea = styled.textarea`
    ${baseInput}
`;

const Button = styled.button`
    ${tw`bg-secondary text-primary border border-solid border-secondary outline-none p-3 w-full self-end md:w-auto md:py-3 md:px-5`}

    &[disabled] {
        ${tw`bg-gray-600 opacity-50 border-0`}
    }
`;

const baseMessage = css`
    ${tw`w-full text-center mx-auto mb-2 p-2 border border-dotted md:w-4/5`}
`;

const Success = styled.p`
    ${baseMessage}
    color: #4f8a10;
    background: #dff2bf;
    border: 1px solid #86bf27;
`;

const Error = styled.p`
    ${baseMessage}
    color: #d8000c;
    background: #ffd2d2;
    border: 1px solid #800007;
`;

const Section = tw.section`min-w-full`;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const _onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            formData.append('form-name', 'Contact');

            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type':
                        'application/x-www-form-urlencoded; charset=utf-8',
                },
                body: new URLSearchParams(formData),
            });

            if (!response.ok) {
                throw new Error(
                    'Error sending the form, please try again or send me an email.',
                );
            }

            setSuccess(true);
        } catch (e) {
            setError(e.message);
        }

        setIsSubmitting(false);
    };

    return (
        <Layout>
            <SEO title="Contact" />

            <Section>
                <p>
                    If you want to get in touch with me feel free to email me at{' '}
                    <a href="me@osiux.ws?subject=Hello!">me@osiux.ws</a>, send
                    me a message in any of my social networks, or you can use
                    the contact form below.
                </p>
                <SocialNetworksList>
                    <SocialNetworkItem>
                        <OutboundLink
                            href="https://github.com/osiux"
                            title="Github"
                        >
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                        </OutboundLink>
                    </SocialNetworkItem>
                    <SocialNetworkItem>
                        <OutboundLink
                            href="https://www.linkedin.com/in/ereveles/"
                            title="Linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                        </OutboundLink>
                    </SocialNetworkItem>
                    <SocialNetworkItem>
                        <OutboundLink
                            href="https://stackoverflow.com/users/717643/eduardo-reveles"
                            title="Stack Overflow"
                        >
                            <FontAwesomeIcon
                                icon={faStackOverflow}
                                fixedWidth
                            />
                        </OutboundLink>
                    </SocialNetworkItem>
                    <SocialNetworkItem>
                        <OutboundLink
                            href="https://twitter.com/osiux"
                            title="Twitter"
                        >
                            <FontAwesomeIcon icon={faTwitter} fixedWidth />
                        </OutboundLink>
                    </SocialNetworkItem>
                    <SocialNetworkItem>
                        <OutboundLink
                            href="https://www.instagram.com/oso96_2000/"
                            title="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} fixedWidth />
                        </OutboundLink>
                    </SocialNetworkItem>
                    <SocialNetworkItem>
                        <OutboundLink
                            href="https://www.last.fm/user/oso96_2000"
                            title="Last.fm"
                        >
                            <FontAwesomeIcon icon={faLastfm} fixedWidth />
                        </OutboundLink>
                    </SocialNetworkItem>
                </SocialNetworksList>

                {success && (
                    <Success>Thanks! I'll be in touch shortly!</Success>
                )}
                {error && <Error>{error}</Error>}

                <Form
                    name="Contact"
                    onSubmit={_onSubmit}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                >
                    <input type="hidden" name="form-name" value="Contact" />
                    <Field>
                        <Label htmlFor="name">Name:</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="email">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="message">Message:</Label>
                        <TextArea
                            name="message"
                            id="message"
                            rows="10"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
                        />
                    </Field>

                    <Field>
                        <Button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send'}
                        </Button>
                    </Field>
                </Form>
            </Section>
        </Layout>
    );
};

export default Contact;
