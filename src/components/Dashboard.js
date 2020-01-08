import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
  const { username, id } = useSelector(state => state.authentication.user);
  const data = useSelector(state => state.parent.data);
  console.log('user id:', username, id, data)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(parentActionCreators.getData(id));
    }, [dispatch, id]);
  
  return (
        <Container>
            <div className='title'><h4>Welcome {username}!</h4></div>
            {data.length === 0 ? <>
                <h6>Begin by picking a pet</h6>
                <Link to='/choosepet'><Button name="Choose Pet" /></Link>
            </> : <>
                <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
                <Link to='/feedpet'><Button name="Feed Pet" /></Link>
                <Link to='/feedpet'><Button name="View Calendar" /></Link>
            </> }

        </Container>
    )
}

export default Login