import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { parentActionCreators } from '../../actions';
import { tada, wobble, bounce, shake, pulse } from 'react-animations';

const tadaAnim = keyframes`${tada}`;
const wobbleAnim = keyframes`${wobble}`;
const bounceAnim = keyframes`${bounce}`;
const shakeAnim = keyframes`${shake}`;
const pulseAnim = keyframes`${pulse}`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .title{
        margin-top: 20px;
        h3{
            font-family: 'Rancho', cursive;
            font-size: 4rem;
        }
    }
    h4{
            /* font-family: 'Rancho', cursive; */
            /* font-size: 4rem; */
            margin-top: 20px;
            margin-bottom: -30px;
        }
    .pets {
        width: 40%;
        height: 180px;
        max-width: 400px;
        min-width: 310px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .pet{
            width: 150px;
            height: 150px;
            /* border: 1px solid blue; */
            img{
                width: 100%;
                animation: 2s ${pulseAnim};
            }
            #dog{
                &:hover{
                    animation: 1s ${wobbleAnim};
                }
            }
            #cat{
                &:hover{
                    animation: 1s ${tadaAnim};
                }
            }
            #llama{
                &:hover{
                    animation: 1s ${shakeAnim};
                }
            }
            #bunny{
                &:hover{
                    animation: 1s ${bounceAnim};
                }
            }
        }
    }
`;

export default function ChoosePet(props) {
    const username = sessionStorage.getItem('username');

    const dispatch = useDispatch();

    const handleChoice = (e, name) => {
        e.preventDefault()
        console.log('pet choice', name)
        dispatch(parentActionCreators.choosePet(name));
        props.history.push('/namepet')
    }

    return (
        <Container>
            <div className='title'><h3>Welcome {username}!</h3></div>
            <div><h4>Choose your pet:</h4></div>
            <div className='pets'>
                <div onClick={(e) => handleChoice(e, ('dog'))} className='pet'><img id='dog' src='../img/Dog1.png' alt='Dog'/></div>
                <div onClick={(e) => handleChoice(e, ('cat'))} className='pet'><img id='cat' src='../img/Cat1.png' alt='Cat'/></div>
            </div>
            <div className='pets'>
                <div onClick={(e) => handleChoice(e, ('llama'))} className='pet'><img id='llama' src='../img/Llama1.png' alt='Llama'/></div>
                <div onClick={(e) => handleChoice(e, ('bunny'))} className='pet'><img id='bunny' src='../img/Bunny1.png' alt='Bunny'/></div>
            </div>
        </Container>
    )
}