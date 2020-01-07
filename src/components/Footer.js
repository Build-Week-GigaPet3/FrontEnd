import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0%;
    background: #6C46A2;
    color: white;
    height: 50px;
    width: 100vw;
    p{
        margin: 5px;
    }
`;

const Footer = () =>{
  
  return (
        <Container>
            <p>{'\u00A9'} 2020 GigaPet Build Team</p>
        </Container>
    )
}

export default Footer