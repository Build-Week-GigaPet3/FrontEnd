import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    background: #9090ff;
    color: white;
    border: none;
    border-radius: 25px;
    box-shadow: 2px 2px 3px grey;
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