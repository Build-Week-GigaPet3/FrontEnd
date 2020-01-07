import React from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
        margin-top: 20px 0;
    }
    .pet {
        margin: 40px;
        width: 40%;
        height: 180px;
        max-width: 400px;
        min-width: 310px;
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
    /* input{
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid grey;
        margin: 30px;
        width: 250px;
        height: 2.0rem;
        background: none;
        font-family: 'Rancho', cursive;
    } */
    select{
        margin: 30px;
    }
`;

export default function FeedPet() {

    return (
        <Container>
            <div className='title'><h4>Let's feed your pet!</h4></div>
            <div>
                <form>
                    <input type='date' name='date' />
                    <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
                    <select>
                        <option>Pizza</option>
                    </select>
                    <Button name='Next' />
                </form>
            </div>
        </Container>
    )
}