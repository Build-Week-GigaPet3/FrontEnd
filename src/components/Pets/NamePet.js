import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../buttons/Button'
import { parentActionCreators } from '../../actions';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title{
        margin: 20px 0;
    }
    .pet {
        margin: 40px;
        width: 40%;
        height: 180px;
        max-width: 400px;
        min-width: 310px;
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        img{
            width: 100%;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        border: none;
        border-radius: 0px;
        border-bottom: 1px solid grey;
        margin: 30px;
        width: 250px;
        height: 2.0rem;
        background: none;
        font-family: 'Rancho', cursive;
    }
`;

export default function NamePet() {

    const [name, setName] = useState('')

    const { id } = useSelector(state => state.authentication.user);
    const petChoice = useSelector(state => state.parent.petChoice);

    const dispatch = useDispatch();

    const handleChanges = (e) =>{
        e.preventDefault()
        setName({
            ...name,
            name: e.target.value
        });

        // console.log(name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id, petChoice, name)
        // dispatch(parentActionCreators.createPet(id, petChoice, name))
    }

    return (
        <Container>
            <div className='title'><h4>Let's name your new {petChoice}!</h4></div>
            <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChanges} placeholder='Name your pet...'></input>
                    <Button type='submit' name='Submit' />
                </form>
            </div>
        </Container>
    )
}