import React from 'react';
import styled from 'styled-components';

const LargeButton = styled.button`
    font-family: 'Hind Madurai', sans-serif;
    background: #6C46A2;
    border: none;
    border-radius: 0.5rem;
    padding: 2rem 5rem;
    font-size: 2rem;
    font-weight: 300;
    width: 30.28rem;
    height: 5.7rem;
    line-height: 2rem;
    color: #ffffff;
    transition: all 500ms;
    margin: 1rem 0;

    &:hover {
        transition: background 500ms;
        background: #5d3c8c;
    }
`;

// For the Sign Up, Next, Continue, Create, Add, Delete, Cancel, Yes, and Submit buttons
// Pass down the button title as a prop <ButtonLarge title="button title" />

export default function ButtonLarge(props) {

    const { title } = props;

    return (
        <LargeButton>
            {title}
        </LargeButton>
    )
}