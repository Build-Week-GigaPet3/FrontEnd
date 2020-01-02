import React from 'react';
import styled from 'styled-components';

const LargeButtonAlt = styled.button`
    font-family: 'Hind Madurai', sans-serif;
    background: #5085EC;
    border: none;
    border-radius: 0.5rem;
    padding: 2rem 5rem;
    font-size: 1.8rem;
    font-weight: 300;
    width: 30.28rem;
    height: 5.7rem;
    line-height: 1.8rem;
    color: #ffffff;
    transition: all 500ms;
    margin: 1rem 0;

    &:hover {
        transition: background 500ms;
        background: #4877d4;
    }
`;

// Alternative large button with blue background per figma wire frame
// Pass down the button title as a prop <ButtonLargeAlt title="button title" />

export default function ButtonLarge(props) {

    const { title } = props;

    return (
        <LargeButtonAlt>
            {title}
        </LargeButtonAlt>
    )
}