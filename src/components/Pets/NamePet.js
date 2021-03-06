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
    height: 100%;
    .title{
        margin: 20px 0;
        margin-bottom: 35px;
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
        height: 3.0rem;
        /* color: white; */
        text-shadow: 1px 1px 2px white;
        background-color: rgba(216, 216, 255, 0.5);
        font-family: 'Rancho', cursive;
    }
`;

export default function NamePet(props) {

    const [name, setName] = useState('')

    // const { id } = useSelector(state => state.authentication.user);
    const userId = sessionStorage.getItem('user');
    const petChoice = sessionStorage.getItem('pet_choice');
    // const petChoice = useSelector(state => state.parent.petChoice);

    
    const {isLoading, error} = useSelector(
        state => ({
            isLoading: state.parent.isLoading,
            error: state.parent.error
        })
    )

    const dispatch = useDispatch();

    const handleChanges = (e) =>{
        e.preventDefault()
        // console.log(e.target.value)
        setName(e.target.value);

        // console.log(name)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(userId, petChoice, name)
        dispatch(parentActionCreators.createPet(userId, petChoice, name, () => props.history.push('/dashboard')))
    }

    return (
        <Container>
            <div className='title'><h4>Let's name your new {petChoice}!</h4></div>
            <div className='pet'><img src={`../img/${petChoice}1.png`} alt='Pet'/></div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChanges} placeholder='Name your pet...'></input>
                    <Button type='submit' name='Submit' />
                </form>
            </div>
            {error && <div className="error">{error}</div>}
            { isLoading && <div>Loading...</div>}
        </Container>
    )
}