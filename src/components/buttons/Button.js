import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    background: #6C46A2;
    color: white;
    border: none;
    border-radius: 5px;
    width: 280px;
    height: 45px;
    font-family: 'Hind Madurai', sans-serif;
    font-size: 1.8rem;
    cursor: pointer;
    transition: all 300ms;
    margin-bottom: 20px;
    &:hover{
        background: #bca6d8
    }
`
export default function Button(props) {
    return (
        <ButtonStyle>
            {props.name}
        </ButtonStyle>
    )
}