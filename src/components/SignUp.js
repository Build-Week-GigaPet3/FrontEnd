import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActionCreators } from '../actions';
import styled from 'styled-components';
import Button from './buttons/Button';

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 99.99vh;
    height: 100%;
`;

const SignUp = (props) =>{

    const dispatch = useDispatch();

    const {isLoading, error} = useSelector(
        state => ({
            isLoading: state.authentication.isLoading,
            error: state.authentication.error
        })
    )

    const registerUser = authActionCreators.registerUser

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
        dispatch(registerUser(data, () => props.history.push('/dashboard')))
    }
  

    return (
        <SignUpContainer>
            <h2>Sign up:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter Username</label>
                <input type="text" id="email" name="username" value={data.username} onChange={handleChange} />

                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" name="password" value={data.password} onChange={handleChange}/>

                <div className="submit">
                    <Button name="Submit" />
                </div>
            </form>
            {error && <div className="error">{error}</div>}
            { isLoading && <div>Loading...</div>}
        </SignUpContainer>
    )
}

export default SignUp