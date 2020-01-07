import React from 'react';
import styled from 'styled-components';
import Button from './buttons/Button';

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
`;

const Login = (props) =>{
  
  return (
        <Container>
            <h2>What it does</h2>
            <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
            <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            <a href='/signup' ><Button name="Create Account" /></a>
        </Container>
    )
}

export default Login