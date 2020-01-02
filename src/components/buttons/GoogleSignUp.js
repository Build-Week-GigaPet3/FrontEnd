import React from 'react';
import styled from 'styled-components';

// icon
import GoogleIcon from '../../img/googleIcon.svg';

const GoogleButton = styled.button`
    font-family: 'Hind Madurai', sans-serif;
    width: 33.6rem;
    height: 5.7rem;
    background: #4285F4;
    border: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 0.5rem;
    margin: 1rem 0;
    color: #ffffff;
    display: flex;
    transition: all 500ms;

    &:hover {
        transition: background 500ms;
        background: #3a79e0;
    }

    .icon {
        width: 20%;
        height: 5.5rem;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;

        img {
            width: 3.9rem;
            height: 4.1rem;
        }
    }

    .button-text {
        width: 75%;
        height: 5.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
        font-weight: 200;
    }
`;

export default function GoogleSignUp() {
    return (
        <GoogleButton>
            <div className="icon"><img src={GoogleIcon} alt="Google Icon" /></div>
            <div className="button-text">
                <p>Sign up with Google</p>
            </div>
        </GoogleButton>
    )
}