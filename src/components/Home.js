import React from 'react';
import styled from 'styled-components';
import Button from './buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    width: 100%;
    height: 100%;
    overflow-y: auto;
    margin: 0 auto;
    /* z-index: 1; */
    .text{
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        width: 80%;
        /* opacity: 0.8; */
    }
    h2{
        color: white;
        text-shadow: 2px 2px 3px black;
        margin: 50px 0;
        font-family: 'Rancho', cursive;
        font-size: 3.5rem;
    }
    p{
        margin: 5px;
        font-size: 1.5rem;
        opacity: 1.5;
        text-shadow: 2px 2px 3px white;
        /* background-color: white; */
    }
    .about{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        .card{
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 5px;
            width: 80%;
            /* min-width: 300px; */
            height: 200px;
            margin: 15px 0;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            img{
                width: 30%;
            }
            .name{
                width: 62%;
                text-align: center;
                h4{
                    font-family: 'Rancho', cursive;
                    font-size: 4rem;
                }
                h5{
                    margin-bottom: 30px;
                }
                a{
                    font-size: 2.5rem;
                    margin: 0 10px;
                    /* margin-top: 30px; */
                    color: lightblue;
                    filter: drop-shadow(2px 2px 2px grey);
                    transition: all 300ms ease-in-out;
                    &:hover{
                        color: #c6d5dd;
                    }
                }
            }
        }
    }
`;

const Login = (props) =>{
  
  return (
        <Container className='home'>
            <h2>Welcome to LambdiPet</h2>
            <h4>What it does:</h4>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>LambdiPet gives your child control over feeding their little buddy and they are able to see what happens when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
            <div className='about'>
                <h4>Meet the LambdiPet team:</h4>
                <div className='card'>
                    <img src='../img/robert.png' alt='Profile' />
                    <div className='name'>
                        <h4>Robert Gordon</h4>
                        <h5>Frontend Dev</h5>
                        <div className='links'>
                            <a href='https://github.com/RobertDGordon'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/in/robert-d-gordon/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href='https://rob-gordon.com'><FontAwesomeIcon icon={faCode} /></a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img src='../img/mad.png' alt='Profile' />
                    <div className='name'>
                        <h4>Madeline McIntosh</h4>
                        <h5>Backend Dev</h5>
                        <div className='links'>
                            <a href='https://github.com/'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href=''><FontAwesomeIcon icon={faCode} /></a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img src='../img/thomas.png' alt='Profile' />
                    <div className='name'>
                        <h4>Thomas Shotts Jr</h4>
                        <h5>Marketing UI</h5>
                        <div className='links'>
                            <a href='https://github.com/'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href=''><FontAwesomeIcon icon={faCode} /></a>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img src='../img/kelly.png' alt='Profile' />
                    <div className='name'>
                        <h4>Kelly Moreira</h4>
                        <h5>Project Lead</h5>
                        <div className='links'>
                            <a href='https://github.com/'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href=''><FontAwesomeIcon icon={faCode} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login