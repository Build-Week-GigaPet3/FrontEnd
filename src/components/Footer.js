import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    background: #6C46A2;
    color: white;
    height: 25px;
    width: 100vw;
    opacity: 0.8;
    z-index:-1;
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