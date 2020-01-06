import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { authActionCreators } from '../actions';

import styled from 'styled-components';

import ButtonLarge from './buttons/ButtonLarge';

const SignUpContainer = styled.div`
    color: #353535;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;

    h2 {
        font-size: 3.6rem;
        font-weight: 200;
        margin: 5rem 0;
    }

    h3 {
        font-size: 3rem;
        font-weight: 200;
        margin: 1rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        font-weight: 200;

        label {
            font-size: 1.8rem;
            text-align: left;
        }

        input[type=text] {
            width: 30.28rem;
            height: 5.7rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.25);
            margin: 1rem 0;
            font-size: 1.8rem;
            padding-left: 1rem;
        }

        input[type=password] {
            width: 30.28rem;
            height: 5.7rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.25);
            margin: 1rem 0;
            font-size: 1.8rem;
            padding-left: 1rem;
        }

        .submit {
            margin-top: 5rem;
        }
    }
`;

const TestLogin = (props) =>{

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
      <>
      <SignUpContainer>
            <h2>Login:</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter Email</label>
                <input type="text" id="email" name="email" value={data.usename} onChange={handleChange} />

                <label htmlFor="password">Enter Password</label>
                <input type="password" id="password" name="password" value={data.password} onChange={handleChange}/>
                
                <div className="submit" type='submit'>
                    <ButtonLarge title="Login" />
                </div>
            </form>
        {error && <div className="error">{error}</div>}
        { isLoading && <div>Loading...</div>}
      </SignUpContainer>
      </>
    )
}

export default TestLogin