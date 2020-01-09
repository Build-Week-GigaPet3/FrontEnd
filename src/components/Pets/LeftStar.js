import React from 'react';
import styled, { keyframes } from 'styled-components';
import { merge, rotateOutUpLeft, fadeOutUpBig, rotateOutUpRight, bounceOutUp } from 'react-animations'

const leftUp = merge( fadeOutUpBig, rotateOutUpLeft, bounceOutUp )
const rightUp = merge( fadeOutUpBig, rotateOutUpRight )
const leftStar = keyframes`${leftUp}`
const rightStar = keyframes`${rightUp}`

const StarStyle = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.6); */
  z-index: 100;
  #left{
        animation: 3s ${leftStar};
        position: fixed;
        top:100%;
        left:50%;
        transform: translate(-50%,-50%);
        z-index: 101;
    }
    #right{
        animation: 4s ${rightStar};
        position: fixed;
        top:100%;
        left:10%;
        transform: translate(-50%,-50%);
        z-index: 102;
    }
  .star-main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    /* background: white; */
    border-radius: 5px;
    width: 50%;
    height: 50%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    .star-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        text-align: center;
    }
  }
  .star-buttons{
      margin-top: 20px;
  }
  button{
        /* margin-bottom: 30px; */
        background: #6C46A2;
        color: white;
        border: none;
        border-radius: 5px;
        width: 100px;
        height: 25px;
        font-family: 'Hind Madurai', sans-serif;
        font-size: 1.8rem;
        cursor: pointer;
        transition: all 300ms;
        &:hover{
            background: lavender
        };
    }
.display-block {
  display: block;
}

.display-none {
  display: none;
}

`
export default function Stars(props) {
    return (
        <StarStyle className='star'>
            <section className='star-main'>                
            <img id='left' src='../img/vectorstarleft.png' alt='Stars' />
            <img id='right' src='../img/vectorstarright.png' alt='Stars' />
                {/* <div className='star-data'>
                    <h6>Are you sure you want to delete {props.name}?</h6>
                    <div className='star-buttons'><button onClick={props.yes}>Yes</button><button onClick={props.cancel}>Cancel</button></div>
                </div> */}
            </section>
        </StarStyle>
    )
}