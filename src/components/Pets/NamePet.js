import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
        margin: 20px 0;
    }
    .pet {
        margin: 40px;
        width: 40%;
        height: 180px;
        max-width: 400px;
        min-width: 310px;
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        img{
            width: 100%;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid grey;
        margin: 30px;
        width: 250px;
        height: 2.0rem;
        background: none;
        font-family: 'Rancho', cursive;
    }
`;

export default function NamePet() {

    return (
        <Container>
            <div className='title'><h4>Let's name your new pet!</h4></div>
            <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
            <div>
                <form>
                    <input placeholder='Name your pet...'></input>
                    <a href='/feedpet'><Button name='Submit' /></a>
                </form>
            </div>
        </Container>
    )
}