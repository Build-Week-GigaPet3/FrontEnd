import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .pets {
        width: 40%;
        height: 180px;
        max-width: 400px;
        min-width: 310px;
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .pet{
            width: 150px;
            height: 150px;
            /* border: 1px solid blue; */
            img{
                width: 100%;
            }
        }
    }
`;

export default function ChoosePet() {

    return (
        <Container>
            <div><h3>Welcome User Name!</h3></div>
            <div><h4>Choose your pet:</h4></div>
            <div className='pets'>
                <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
                <div className='pet'><img src='../img/Cat1.png' alt='Cat'/></div>
            </div>
            <div className='pets'>
                <div className='pet'><img src='../img/Llama1.png' alt='Llama'/></div>
                <div className='pet'><img src='../img/Bunny1.png' alt='Bunny'/></div>
            </div>
        </Container>
    )
}