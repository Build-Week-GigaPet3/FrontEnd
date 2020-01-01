import React from 'react';
import styled from 'styled-components';

const SmallButton = styled.button`
    font-family: 'Hind Madurai', sans-serif;
    background: #6C46A2;
    width: 15.6rem;
    height: 5.7rem;
    font-size: 1.8rem;
    font-weight: 200;
    color: #ffffff;
    line-height: 5.7rem;
    transition: all 500ms;
    border: none;
    border-radius: 0.5rem;

    &:hover {
        transition: background 500ms;
        background: #5d3c8c;
    }
`;

export default function ButtonSmall(props) {

    const { title } = props;

    return (
        <SmallButton>
            {title}
        </SmallButton>
    )
}