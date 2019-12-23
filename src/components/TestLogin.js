import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { authActionCreators } from '../actions';

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
        <h1>Test Login</h1>
        <form onSubmit={handleSubmit}>

          <input type="name" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

          <button type="submit">Sign In</button>
        </form>
        {error && <div className="error">{error}</div>}
        { isLoading && <div>Loading...</div>}
      </>
    )
}

export default TestLogin