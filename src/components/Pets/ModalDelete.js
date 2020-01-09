import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  .modal-main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: rgba(255,255,255,0.9);
    border-radius: 5px;
    width: 300px;
    height: 150px;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    .modal-data{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        text-align: center;
        h6{
            font-family: 'Rancho', cursive;
            font-size: 3rem;
        }
    }
  }
  .modal-buttons{
      margin-top: 20px;
  }
  button{
        /* margin-bottom: 30px; */
        background: #9090ff;
        color: white;
        border: none;
        border-radius: 25px;
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
export default function ModalDelete(props) {
    return (
        <ModalStyle className='modal'>
            <section className='modal-main'>
                <div className='modal-data'>
                    <h6>Are you sure you want to delete {props.name}?</h6>
                    <div className='modal-buttons'><button onClick={props.yes}>Yes</button><button onClick={props.cancel}>Cancel</button></div>
                </div>
            </section>
        </ModalStyle>
    )
}