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
    display: block;
    position:fixed;
    background: white;
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
        margin-top: 100px;
    }
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
                    Are you sure you want to delete {props.name}?
                    <button>Yes</button><button>Cancel</button>
                </div>
            </section>
        </ModalStyle>
    )
}