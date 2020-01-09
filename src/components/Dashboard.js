import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './buttons/Button';
import ModalDelete from './Pets/ModalDelete'
import { parentActionCreators } from '../actions';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: auto;
    padding-top: 170px;
    p{
        margin: 5px;
    }
    .title{
        margin-bottom: 20px;
        /* background-color: rgba(216, 2216, 255, 0.5); */
        /* padding: 8px 15px; */
        border-radius: 20px;
        h4{
            font-family: 'Rancho', cursive;
            font-size: 4rem;
        }
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
    .pet-name {
        background-color: rgba(216, 216, 255, 0.5);
        border-radius: 10px;
        margin: 10px 0;
        padding: 0 10px;
        p{
            font-family: 'Rancho', cursive;
            font-size: 2.5rem;
            color: white;
            text-shadow: 2px 2px 3px black;
        }
    }
    .btn-container-top{
        margin-top: 20px;
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
        &:hover{
            background: lavender
        };
    }
`;

const Dashboard = (props) =>{
  const { isLoading } = useSelector(state => state.authentication.user);
  const userId = sessionStorage.getItem('user');
  const petId = sessionStorage.getItem('petId');
  const username = sessionStorage.getItem('username');
  const data = useSelector(state => state.parent.data);
  const dispatch = useDispatch();

  const [deletePet, setDeletePet] = useState(false);

//   console.log('user id:', username, id, 'session:', userId, 'data:',data)

  const handleEditPet = (e) => {
    e.preventDefault()
    console.log("edit pet")
    props.history.push('/editpet')
  }

  const handleDeletePet = (e) => {
    e.preventDefault()
    console.log("delete set to", deletePet)
    setDeletePet(true)
  }

  const handleDeleteYes = (e) => {
    e.preventDefault()
    console.log("deleting...")
    dispatch(parentActionCreators.deletePet(petId, userId))
    setDeletePet(false)
  }

  const handleDeleteCancel = (e) => {
    e.preventDefault()
    console.log("cancel delete pet")
    setDeletePet(false)
  }

  const handleLoadCalendar = (e) =>{
    e.preventDefault()
    props.history.push('calendar')
  }

  useEffect(() => {
    dispatch(parentActionCreators.getData(userId));
  }, [isLoading, dispatch, userId]);
  
  return (
        <Container>
            <div className='title'><h4>Welcome {username}!</h4></div>
                {data === undefined ? <>Loading...</> : 
                    <>
                        {data.length === 0 || data[0].name === '' ? 
                    <>
                        <h6>Begin by picking a pet:</h6>
                        <Link to='/choosepet'><Button name="Choose Pet" /></Link>
                    </> : <>
                        <div className='pet'><img src={`../img/${data[0].image}1.png`} alt='Pet'/></div>
                        <div className='pet-name'><p>{data[0].pet_name}</p></div>
                        {/* <Link to='/feedpet'><Button name="Feed Pet" /></Link> */}
                        {/* <Link to='/calendar'><Button name="View Calendar" /></Link> */}
                        <div className='btn-container-top'>
                            <button id='one' className='delete-pet-btn' onClick={()=> props.history.push('/calendar')}>Feed Pet</button>
                            <button id='two' className='delete-pet-btn' onClick={handleLoadCalendar}>View Calendar</button>
                        </div>
                        <div className='btn-container-bottom'>
                            <button id='three' className='delete-pet-btn' onClick={handleEditPet}>Edit Pet</button>
                            <button id='four' className='delete-pet-btn' onClick={handleDeletePet}>Delete Pet</button>
                        </div>
                    </> 
                    }
                    </>
                }
            {deletePet ? <ModalDelete  name={data[0].pet_name} cancel={handleDeleteCancel} yes={handleDeleteYes}/> : <></>}
        </Container>
    )
}

export default Dashboard