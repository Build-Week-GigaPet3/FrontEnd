import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
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

export default function ChoosePet(props) {

    const dispatch = useDispatch();


    const handleChoice = (e, name) => {
        e.preventDefault()
        console.log('pet choice', name)
        // dispatch(parentActionCreators.choosePet(e.target.name));
        // props.history.push('/namepet')
    }

    return (
        <Container>
            <div><h3>Welcome User Name!</h3></div>
            <div><h4>Choose your pet:</h4></div>
            <div className='pets'>
                <div onClick={(e) => handleChoice(e, ('dog'))} className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
                <div onClick={(e) => handleChoice(e, ('cat'))} className='pet'><img src='../img/Cat1.png' alt='Cat'/></div>
            </div>
            <div className='pets'>
                <div onClick={(e) => handleChoice(e, ('llama'))} className='pet'><img src='../img/Llama1.png' alt='Llama'/></div>
                <div onClick={(e) => handleChoice(e, ('bunny'))} className='pet'><img src='../img/Bunny1.png' alt='Bunny'/></div>
            </div>
        </Container>
    )
}