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
  z-index: 1;
  .modal-main {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: white;
    border-radius: 5px;
    width: 300px;
    height: 300px;
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
    }
  }
  .modal-buttons{
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