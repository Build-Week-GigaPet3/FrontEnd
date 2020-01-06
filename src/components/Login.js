import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { authActionCreators } from '../actions';

import styled from 'styled-components';

import Button from './buttons/Button';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Login = (props) =>{

    const dispatch = useDispatch();

    const {isLoading, error} = useSelector(
        state => ({
            isLoading: state.authentication.isLoading,
            error: state.authentication.error
        })
    )

    const authenticateUser = authActionCreators.authenticateUser

    const [data, setData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (event) => {
    setData({
        ...data,
        [event.target.name]: event.target.value,
    })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(authenticateUser(data, () => props.history.push('/loginsuccess')))
    }
  
  return (
        <LoginContainer>
            <h2>Login:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter Email</label>
                <input type="text" id="email" name="username" value={data.username} onChange={handleChange} />

                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" name="password" value={data.password} onChange={handleChange}/>
                
                <div className="submit" type='submit'>
                    <Button name="Login" />
                </div>
            </form>
            {error && <div className="error">{error}</div>}
            { isLoading && <div>Loading...</div>}
        </LoginContainer>
    )
}

export default Login