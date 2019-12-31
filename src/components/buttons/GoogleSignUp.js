import React from 'react';
import styled from 'styled-components';

const GoogleButton = styled.button`
    font-family: 'Hind Madurai', sans-serif;
    width: 33.6rem;
    height: 5.7rem;
    background: #4285F4;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 200;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    margin: 1rem 0;
`;

export default function GoogleSignUp() {
    return (
        <GoogleButton>
            Sign up with Google
        </GoogleButton>
    )
}