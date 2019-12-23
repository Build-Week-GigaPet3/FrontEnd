import React, { useState } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useDispatch, useSelector } from 'react-redux';

const TestLogin = (props) =>{

    const {isLoading, error} = useSelector(
        state => ({
            isLoading: state.isLoading,
            error: state.error
        })
    )

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
        axiosWithAuth()
        .post('/login', data)
        .then(res => {
            console.log(res.data)
            sessionStorage.setItem('token',res.data.payload)
            props.history.push('/bubbles')
        })
        .catch(err => {
            console.log(err)

        })
    }
  
  return (
      <>
        <h1>Test Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <div className="error">{error}</div>}

          <input type="name" name="username" placeholder="Username" value={data.username} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={data.password} onChange={handleChange} />

          <button type="submit">Sign In</button>
        </form>
        { isLoading && <div>Loading...</div>}
      </>
)

}

export default TestLogin