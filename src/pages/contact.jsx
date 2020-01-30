import React, { useState } from 'react';
import styled from '@emotion/styled';
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

const SocialNetworksList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    font-size: 2rem;
`;

const Form = styled.form`
    display: flex;
    width: 100%;
    margin: 10px auto 0;
    flex-direction: column;

    ${props => props.theme.breakpoints.desktop} {
        width: 80%;
    }
`;

const Field = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    flex-direction: column;

    ${props => props.theme.breakpoints.desktop} {
        flex-direction: row;
    }
`;

const Label = styled.label`
    flex: 1;
    margin-bottom: 2px;

    ${props => props.theme.breakpoints.desktop} {
        flex: 1 0 30%;
        margin-bottom: 0;
    }
`;

const baseInput = theme => css`
    padding: 5px;
    border: 1px solid ${theme.colors.text};
    flex: 1;
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};

    ${theme.breakpoints.desktop} {
        flex: 2 0 70%;
    }
`;

const Input = styled.input`
    ${props => baseInput(props.theme)}
`;

const TextArea = styled.textarea`
    ${props => baseInput(props.theme)}
`;

const Button = styled.button`
    background: ${props => props.theme.colors.text};
    color: ${props => props.theme.colors.background};
    border: 0;
    padding: 10px;
    width: 100%;
    align-self: flex-end;
    outline: 0;

    &[disabled] {
        background-color: #ccc;
    }

    ${props => props.theme.breakpoints.desktop} {
        width: auto;
        padding: 10px 20px;
    }
`;

const baseMessage = theme => css`
    width: 100%;
    text-align: center;
    margin: 0 auto;
    padding: 5px;
    border: 1px dotted;

    ${theme.breakpoints.desktop} {
        width: 80%;
    }
`;

const Success = styled.p`
    ${props => baseMessage(props.theme)}
    color: #4f8a10;
    background: #dff2bf;
`;

const Error = styled.p`
    ${props => baseMessage(props.theme)}
    color: #d8000c;
    background: #ffd2d2;
`;

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const _onSubmit = async e => {
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

            <section>
                <p>
                    If you want to get in touch with me feel free to email me at{' '}
                    <a href="me@osiux.ws?subject=Hello!">me@osiux.ws</a>, send
                    me a message in any of my social networks, or you can use
                    the contact form below.
                </p>
                <SocialNetworksList>
                    <li>
                        <OutboundLink
                            href="https://github.com/osiux"
                            title="Github"
                        >
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://www.linkedin.com/in/ereveles/"
                            title="Linkedin"
                        >
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://stackoverflow.com/users/717643/eduardo-reveles"
                            title="Stack Overflow"
                        >
                            <FontAwesomeIcon
                                icon={faStackOverflow}
                                fixedWidth
                            />
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://twitter.com/osiux"
                            title="Twitter"
                        >
                            <FontAwesomeIcon icon={faTwitter} fixedWidth />
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://www.instagram.com/oso96_2000/"
                            title="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} fixedWidth />
                        </OutboundLink>
                    </li>
                    <li>
                        <OutboundLink
                            href="https://www.last.fm/user/oso96_2000"
                            title="Last.fm"
                        >
                            <FontAwesomeIcon icon={faLastfm} fixedWidth />
                        </OutboundLink>
                    </li>
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
                            onChange={e => setName(e.target.value)}
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
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </Field>

                    <Field>
                        <Label htmlFor="message">Message:</Label>
                        <TextArea
                            name="message"
                            id="message"
                            rows="10"
                            onChange={e => setMessage(e.target.value)}
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
            </section>
        </Layout>
    );
};

export default Contact;
