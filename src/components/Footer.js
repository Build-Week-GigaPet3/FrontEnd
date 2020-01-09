import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
    margin-top: 30px;
    margin-bottom: -1px;
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* position: fixed; */
        bottom: 0;
        background: #6C46A2;
        color: white;
        height: 25px;
        width: 100vw;
        opacity: 0.8;
        z-index: 0;
        p{
            margin: 5px;
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