import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import ButtonDiv from './buttons/ButtonDiv'
import ModalDelete from './Pets/ModalDelete'
import { parentActionCreators } from '../actions';

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
    .title{
        margin-top: 20px 0;
    }
    .pet {
        margin: 40px;
        width: 40%;
        height: 180px;
        max-width: 400px;
        min-width: 310px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        img{
            width: 100%;
        }
    }
    #delete-pet-btn{
        margin-bottom: 30px;
        background: #6C46A2;
        color: white;
        border: none;
        border-radius: 5px;
        width: 140px;
        height: 25px;
        font-family: 'Hind Madurai', sans-serif;
        font-size: 1.8rem;
        cursor: pointer;
        transition: all 300ms;
        &:hover{
            background: lavender
        };
    }
`;

const Dashboard = (props) =>{
  const { username, id } = useSelector(state => state.authentication.user);
  const data = useSelector(state => state.parent.data);
  console.log('user id:', username, id, 'data:',data)
  const dispatch = useDispatch();

  const [deletePet, setDeletePet] = useState(false);

  const handleDeletePet = (e) => {
    e.preventDefault()
    console.log("delete set to", deletePet)
    setDeletePet(true)
    
  }

  const handleDeleteYes = (e) => {
    e.preventDefault()
    console.log("deleting...")
    dispatch(parentActionCreators.deletePet(data[0].id))
    setDeletePet(false)
  }

  const handleDeleteCancel = (e) => {
    e.preventDefault()
    console.log("cancel delete pet")
    setDeletePet(false)
  }

  useEffect(() => {
    dispatch(parentActionCreators.getData(id));
    }, [dispatch, id]);
  
  return (
        <Container>
            <div className='title'><h4>Welcome {username}!</h4></div>
                {data === undefined ? <>Loading...</> : 
                    <>
                        {data.length === 0 || data[0].name === '' ? 
                    <>
                        <h6>Begin by picking a pet</h6>
                        <Link to='/choosepet'><Button name="Choose Pet" /></Link>
                    </> : <>
                        <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
                        <Link to='/feedpet'><Button name="Feed Pet" /></Link>
                        <Link to='/feedpet'><Button name="View Calendar" /></Link>
                        <button id='delete-pet-btn' onClick={handleDeletePet}>Delete Pet</button>
                    </> 
                    }
                    </>
                }
            {deletePet ? <ModalDelete  name={'pet name'} cancel={handleDeleteCancel} yes={handleDeleteYes}/> : <></>}
        </Container>
    )
}

export default Dashboard