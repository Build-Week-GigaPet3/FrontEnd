import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Balloons from '../Pets/Balloons'
import { tada, wobble, bounce, shake, pulse } from 'react-animations';

const tadaAnim = keyframes`${tada}`;
const wobbleAnim = keyframes`${wobble}`;
const bounceAnim = keyframes`${bounce}`;
const shakeAnim = keyframes`${shake}`;
const pulseAnim = keyframes`${pulse}`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow-y: auto;
    .pet{
        img{
            height: 300px;
            &:hover{
                animation: 1s ${pulseAnim};
            }
        }
        #age1{
            animation: 1s ${bounceAnim}
        }
        #age2{
            animation: 1s ${shakeAnim}
        }
        #age3{
            animation: 1s ${tadaAnim}
        }
        #age4{
            animation: 1s ${wobbleAnim}
        }
    }
    .title{
        margin: 20px;
        margin-top: 45px;
        border-radius: 20px;
        height: 80px;
        text-align: center;
        h4{
            font-family: 'Rancho', cursive;
            font-size: 4rem;
            span{
                color: #ffff66;
            }
        }
    }
    .pet-name {
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        margin: 10px 0;
        padding: 0 15px;
        p{
            font-family: 'Rancho', cursive;
            font-size: 2.5rem;
            color: white;
            text-shadow: 2px 2px 3px black;
            span{
                color: #9933ff;
            }
        }
    }
    .btn-container-top{
        margin-top: 50px;
    }
    .btn-container-bottom{
        margin-bottom: 20px;
    }
    .delete-pet-btn{
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
        @media screen and (max-width: 320px) {
            margin: 0 8px 30px 8px;
        }
        &:hover{
            background: lavender
        };
    }
`;

const Levels = (props) =>{

//   const logs = useSelector(state => state.parent.log)
  const username = sessionStorage.getItem('username');
  const pet_name = sessionStorage.getItem('pet_name');
  const image = sessionStorage.getItem('image');
  const [ age, setAge ] = useState(1);
  const [showLeftStar, setShowLeftStar] = useState(false);

  const handleLevelDown = () => {
    if (age === 1){
        setAge(4)
        // console.log(age)
    }else{
        setAge(age-1)
        // console.log(age)
    }
  }

  async function handleLevelUp() {
    if (age === 4){
        setAge(1)
        // console.log(age)
    }else{
        setAge(age+1)
        // console.log(age)
        setShowLeftStar(true)
        await new Promise(r => setTimeout(r, 1500));
        setShowLeftStar(false)  
    }
}

  return (
        <Container>
            <div className='title'>
                {showLeftStar ? <><h4><span>Congratulations!</span><br/>{username}!</h4></> : <></>}
            </div>
            <div className='pet'>
                <img id={`age${age}`} src={`../img/${image}${age}.png`} alt='Pet'/>
            </div>
            <div className='pet-name'><p>{pet_name} at level: <span>{age}</span></p></div>
            <div className='btn-container-top'>
                <button id='one' className='delete-pet-btn' onClick={handleLevelDown}>Level Down</button>
                <button id='two' className='delete-pet-btn' onClick={handleLevelUp}>Level Up</button>
            </div>
            {showLeftStar ? <><Balloons /></> : <></>}
        </Container>
    )
}

export default Levels