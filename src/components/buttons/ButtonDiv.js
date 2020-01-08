import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.div`
    background: #6C46A2;
    color: white;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 25px;
    font-family: 'Hind Madurai', sans-serif;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 300ms;
    &:hover{
        background: lavender
    }
`
export default function Button(props) {
    return (
        <ButtonStyle>
            {props.name}
        </ButtonStyle>
    )
}