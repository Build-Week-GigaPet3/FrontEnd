import React from 'react';
import styled from 'styled-components';
import Button from './buttons/Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    min-height: 462px;
    margin: 0 auto;
    .text{
        background-color: lightblue;
        border-radius: 5px;
        width: 80%;
        opacity: 0.8;
    }
    h2{
        color: white;
        text-shadow: 2px 2px 3px black
    }
    p{
        margin: 5px;
        font-size: 1.5rem;
        opacity: 1.5;
        text-shadow: 2px 2px 3px white;
        /* background-color: white; */
    }
`;

const Login = (props) =>{
  
  return (
        <Container>
            <h2>What it does</h2>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
            <h2>What it does</h2>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
            <h2>What it does</h2>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
            <h2>What it does</h2>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
            <h2>What it does</h2>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
            <h2>What it does</h2>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
            <h2>What it does</h2>
            <div className='text'>
                <p>Being a parent we know you are always looking for ways to motivate your kids to eat. With this app, you can input the servings of food you child eats, and the child can watch their Lambdi Pet grow and flourish, or wither and struggle based on what food they eat.</p>
                <p>Lambdi Pet gives your child control over feeding their little buddy and are able to see what happends when they make healthy eating choices.</p>
            </div>
            <a href='/signup' ><Button name="Create Account" /></a>
        </Container>
    )
}

export default Login
