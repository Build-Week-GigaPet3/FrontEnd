import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from './buttons/Button';
import { parentActionCreators } from '../actions';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
    p{
        margin: 5px;
    }
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
`;

const Login = (props) =>{

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(parentActionCreators.getData());
    }, []);
  
  return (
        <Container>
            <div className='title'><h4>Welcome username!</h4></div>
            <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
            <a href='/feedpet' ><Button name="Feed Pet" /></a>
            <a href='/feedpet' ><Button name="View Calendar" /></a>
        </Container>
    )
}

export default Login