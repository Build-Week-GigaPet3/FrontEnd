import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* position: fixed; */
        bottom: 0;
        background: #9090ff;
        color: white;
        height: 25px;
        width: 100vw;
        opacity: 0.5;
        z-index: 0;
        p{
            margin: 5px;
            text-shadow: 2px 2px 3px black;
        }
    }
    
`;

const Footer = () =>{
  
  return (
        <Container>
            <footer>
                <p>{'\u00A9'} 2020 GigaPet Build Team</p>
            </footer>
        </Container>
    )
}

export default Footer