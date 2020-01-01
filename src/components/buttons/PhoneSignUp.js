import React from 'react';
import styled from 'styled-components';

// icon
import PhoneIcon from '../../img/phoneIcon.svg';

const PhoneButton = styled.button`
    font-family: 'Hind Madurai', sans-serif;
    background: #ffffff;
    border-radius: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.5);
    width: 33.6rem;
    height: 5.7rem;
    display: flex;
    margin: 1rem 0;
    transition: all 500ms;

    &:hover {
        transition: background 500ms;
        background: #e3e3e3;
    }

    .icon {
        width: 20%;
        height: 5.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

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

export default function PhoneSignUp() {

    return (
        <PhoneButton>
            <div className="icon">
                <img src={PhoneIcon} alt="Phone" />
            </div>
            <div className="button-text">
                <p>Sign up with Phone</p>
            </div>
        </PhoneButton>
    )
}