import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { slideInRight, slideInLeft } from 'react-animations';

const left = keyframes `${slideInLeft}`
const right = keyframes `${slideInRight}`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 0 auto;
    overflow-y: auto;
    #left{
        animation: 2s ${left};
    }
    #right{
        animation: 2s ${right};
    }
    .text{
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 5px;
        width: 310px;
        margin-bottom: 20px;
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
    .btn-container{
        .btn{
        margin: 0 15px 30px 15px;
        background: #9090ff;
        color: white;
        border: none;
        border-radius: 25px;
        box-shadow: 2px 2px 3px grey;
        width: 140px;
        height: 25px;
        font-family: 'Hind Madurai', sans-serif;
        font-size: 1.8rem;
        cursor: pointer;
        transition: all 300ms;
        @media screen and (max-width: 340px) {
            margin: 0 8px 30px 8px;
        }
        &:hover{
            background: lavender
        };
    }
    }
    .about{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 40px;
        .card{
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 5px;
            width: 310px;
            /* min-width: 300px; */
            height: 160px;
            margin: 12px 0;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            transition: all 300ms ease-in-out;
                &:hover{
                transform: scale(1.2);
                background-color: rgba(255, 255, 255, 0.9);
            }
            img{
                width: 30%;
            }
            .name{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 62%;
                height: 100%;
                text-align: center;
                h4{
                    font-family: 'Rancho', cursive;
                    font-size: 3.2rem;
                }
                h5{
                    margin-bottom: 30px;
                }
                #mad{
                    font-family: 'Rancho', cursive;
                    font-size: 2.7rem;
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
        <Container>
            <h2>Welcome to LambdiPet</h2>
            <h4>What it does:</h4>
            <div id='left' className='text'>
                <p>LambdiPet is a mobile first design, allowing users to have quick on the go access to the app!</p>
            </div>
            <div id='right' className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
            </div>
            <div id='left' className='text'>
                <p>LambdiPet gives your child control over feeding their little buddy and they are able to see what happens when they make healthy eating choices.</p>
            </div>
            <div className='btn-container'>
                            <button id='one' className='btn' onClick={()=> props.history.push('/signup')}>Create Account</button>
                            <button id='two' className='btn' onClick={()=> props.history.push('/login')}>Login</button>
            </div>
            <div className='about'>
                <h4>Meet the LambdiPet team:</h4>
                <div id="right" className='card'>
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
                <div id="left" className='card'>
                    <img src='../img/mad.png' alt='Profile' />
                    <div className='name'>
                        <h4><span id='mad'>Madeline McIntosh</span></h4>
                        <h5>Backend Dev</h5>
                        <div className='links'>
                            <a href='https://github.com/'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href='/'><FontAwesomeIcon icon={faCode} /></a>
                        </div>
                    </div>
                </div>
                <div id="right" className='card'>
                    <img src='../img/thomas.png' alt='Profile' />
                    <div className='name'>
                        <h4>Thomas Shotts Jr</h4>
                        <h5>Marketing UI</h5>
                        <div className='links'>
                            <a href='https://github.com/'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href='/'><FontAwesomeIcon icon={faCode} /></a>
                        </div>
                    </div>
                </div>
                <div id="left" className='card'>
                    <img src='../img/kelly.png' alt='Profile' />
                    <div className='name'>
                        <h4>Kelly Moreira</h4>
                        <h5>Project Lead</h5>
                        <div className='links'>
                            <a href='https://github.com/'><FontAwesomeIcon icon={faGithub} /></a>
                            <a href='https://www.linkedin.com/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            <a href='/'><FontAwesomeIcon icon={faCode} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login