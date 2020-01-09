import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../buttons/Button'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// import { parentActionCreators } from '../../actions';

// import { getFood } from '../../hooks';

import ModalDelete from './ModalDelete';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: auto;
    padding-top: 170px;
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
    .pet-name {
        p{
            font-family: 'Rancho', cursive;
            font-size: 2.2rem;
            margin-top: 5px;
        }
    }
    .date-picker{
        display: flex;
        flex-direction: column;
        justify-content: center;
        div{
            font-size: 1.5rem;
        }
        #date-label{
            font-size: 1.5rem;
            /* text-align: left; */
            margin-bottom: -29px;
            margin-left: 30px
        }
    }
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    input{
        /* border: none; */
        /* border-radius: 0px; */
        /* border-bottom: 1px solid grey; */
        margin: 30px;
        width: 250px;
        height: 30px;
        background: white;
        color: black;
        /* z-index: 0; */
    }
    #dropdown{
        display: flex;
        flex-direction: column;
    }
    #category{
        font-size: 1.5rem;
        /* text-align: left; */
        margin-bottom: -29px;
        margin-left: 30px;
    }
    #item{
        font-size: 1.5rem;
        /* text-align: left; */
        /* margin-bottom: -29px; */
        margin-left: 30px;
    }
    select{
        border-radius: 5px;
        margin: 30px;
        width: 250px;
        height: 30px;
        background: white;
        color: black;
        /* z-index: 0; */
        font-size: 1.8rem;
    }
    #food-list{
        margin-top: 0px;
    }
    #add-food-btn{
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
    #delete-food-btn{
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
    #add-food-input{
        margin-top:22px;
    }
`;

export default function FeedPet() {
    const foodData =  useSelector(state => state.parent.food);
    const pet_name = sessionStorage.getItem('pet_name');
    const image = sessionStorage.getItem('image');
    const [startDate, setStartDate] = useState(new Date());
    const [food, setFood] = useState(foodData);
    const [foodIndex, setFoodIndex] = useState(0);
    const [foodItem, setFoodItem] = useState(food[0].items[0]);
    const [itemIndex, setItemIndex] = useState(0);
    const [newFood, setNewFood] = useState('');
    const [addFood, setAddFood] = useState(false);
    const [deleteFood, setDeleteFood] = useState(false);

    const handleChanges = (e) => {
        e.preventDefault()
        setNewFood(e.target.value)
    }

    const handleIndexChanges = (e) =>{
        if (e.target.name === 'category'){
            setFoodIndex(e.target.value);
            if (food[e.target.value].items[itemIndex] === undefined ){
                console.log('item index:', itemIndex, 'setting to zero')
                setItemIndex(0)
            }else{
                setFoodItem(food[e.target.value].items[itemIndex])
                console.log('setting category to', e.target.value, food[e.target.value].items[itemIndex])
            }
        }else if (e.target.name === 'name'){
            if (e.target.value === 'AddNew'){
                setAddFood(true)
                setFoodItem(food[foodIndex].items[itemIndex])
            } else {
                if (itemIndex === undefined ){
                    console.log('item index:', itemIndex, 'setting to zero')
                    setItemIndex(0)
                }else{
                    setItemIndex(e.target.value);
                    setFoodItem(food[foodIndex].items[e.target.value])
                    console.log('setting item to', e.target.value)
                }
            }
        }
    }

    const handleAddFood = (e) => {
        e.preventDefault()
        // setFoodItem(newFood)
        // setFood([
        //     ...food,
        //     {...food[foodIndex].items,
        //         newFood
        //     }
        // ])
        console.log(food[foodIndex].items)
        food[foodIndex].items.push(newFood)
        setItemIndex(0)
        setAddFood(false)
        // console.log("adding new food:", newFood)
    }

    const handleCancelFood = (e) => {
        e.preventDefault()
        setFoodItem(food[foodIndex].items[itemIndex])
        setAddFood(false)
        console.log("addFood set to", addFood)
    }

    const handleDeleteFood = (e) => {
        e.preventDefault()
        console.log(food)
        if (food.name === ''){
            return
        }
        setDeleteFood(true)
    }

    const handleDeleteYes = (e) => {
        e.preventDefault()
        console.log("deleting...")
        
        setDeleteFood(false)
    }

    const handleDeleteCancel = (e) => {
        e.preventDefault()
        console.log("cancel delete food")
        setFoodItem(foodItem)
        setDeleteFood(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('submit',startDate, food)
        if (addFood && food.name !== ''){
            setFood({
                ...food,
                array: [...food.array, food.name]
            })
            console.log(food.array)
        }
        setAddFood(false)
    }

    return (
        <Container>
            <div className='title'><h4>Let's feed your pet!</h4></div>
                <div className='date-picker'>
                    <label id='date-label'>Choose date:</label>
                    <DatePicker todayButton="Today" selected={startDate} onChange={date => setStartDate(date)} withPortal />
                </div>
                <div className='pet'><img src={`../img/${image}1.png`} alt='Pet'/></div>
                <div className='pet-name'><p>{pet_name}</p></div>
                <form onSubmit={handleSubmit}>
                    {/* <input id='date-input' value={currentDate} type='date' onChange={handleChanges} required pattern="\d{4}-\d{2}-\d{2}"/> */}
                    <div id='dropdown'>
                        <label id='category'>Choose a category:</label>
                        <select name='category' onChange={handleIndexChanges} required>
                            {/* <option defaultValue='' disabled selected>Choose a category...</option> */}
                            {/* {food === undefined ? <>Loading...</> :
                            <> */}
                                {food.map((item, index) => <option key={index} value={index}>{item.name}</option>)}
                            {/* </>} */}
                        </select>
                        {!addFood ?
                            <>
                            <label id='item'>Choose a type of {food[foodIndex].name}:</label>
                            <select id='food-list' name='name' onChange={handleIndexChanges} required>
                                {/* <option value='' disabled selected>Choose a type of {food[foodIndex].name}...</option> */}
                                {food[foodIndex].items.map((name,index) => <option key={index} value={index}>{name}</option>)}
                                <option value="AddNew">Add new food...</option>
                            </select>
                            </> :
                        <></>}
                    </div>
                        <div className='add-delete-btns'>
                            {/* {!addFood ? <button id='add-food-btn' onClick={handleAddFood} >Create {food.category}</button> : <></> } */}
                            {!addFood ? <button id='delete-food-btn' onClick={handleDeleteFood} >Delete {foodItem}</button> : <></> }
                        </div>
                    {addFood ? 
                        <>
                        <input id='add-food-input' name='name' placeholder='Name your food...' onChange={handleChanges} required></input>
                        <div className='add-delete-btns'>
                            <button id='delete-food-btn' onClick={handleCancelFood}>Cancel</button>
                            <button id='add-food-btn' onClick={handleAddFood} >Add {food[foodIndex].name}</button>
                        </div>
                        </> : <></>}
                    {/* {food.name !==  '' ? <Button type='submit' name='Feed!' /> : <></>} */}
                    <Button type='submit' name='Feed Pet!' />
                </form>
            {deleteFood ? <ModalDelete name={foodItem} cancel={handleDeleteCancel} yes={handleDeleteYes}/> : <></>}
        </Container>
    )
}


    // function addZero(md) {
    //     if (md < 10 ){
    //         md = "0" + md
    //     };
    //     return md;
    // }
    // const day = new Date().getDate();
    // const month = new Date().getMonth()+1
    // const year = new Date().getFullYear();
    // const currentDate = (`${year}-`+addZero(day)+'-'+addZero(month))
    // console.log(currentDate)
    // const element = document.getElementById('date-input')
    // console.log(element)