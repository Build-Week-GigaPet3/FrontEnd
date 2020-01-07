import React, {useState} from 'react';
import styled from 'styled-components';
import Button from '../buttons/Button'
import ButtonFoodName from '../buttons/ButtonFoodName'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    .date-picker{
        display: flex;
        justify-content: center;
        div{
            font-size: 1.2rem;
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
        margin-bottom: 10px;
        border: 1px solid red;
    }
`;

export default function FeedPet() {

    const [startDate, setStartDate] = useState(new Date());
    const [food, setFood] = useState({
        category: "",
        name: "",
        array: [
            "Pizza",
            "Ice Cream",
            "Carrots"
        ],
    })
    const [addFood, setAddFood] = useState(false);

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


    const handleChanges = (e) =>{
        e.preventDefault()
        setFood({
            ...food,
            [e.target.name]: e.target.value
        });

        console.log(food)
    }

    const handleAddFood = (e) => {
        e.preventDefault()
        setAddFood(true)
        console.log("addFood set to", addFood)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(startDate, food)
    }

    return (
        <Container>
            <div className='title'><h4>Let's feed your pet!</h4></div>
            <div>
                <div className='date-picker'><DatePicker todayButton="Today" selected={startDate} onChange={date => setStartDate(date)} withPortal /></div>
            
                <form onSubmit={handleSubmit}>
                    {/* <input id='date-input' value={currentDate} type='date' onChange={handleChanges} required pattern="\d{4}-\d{2}-\d{2}"/> */}
                    
                    <div className='pet'><img src='../img/Dog1.png' alt='Dog'/></div>
                    <select name='category' onChange={handleChanges} required>
                        <option value='' disabled selected>Choose a category...</option>
                        <option value='Fruit'>Fruit</option>
                        <option value='Vegetables'>Vegetables</option>
                        <option value='Grains'>Grains</option>
                        <option value='Meat'>Meat</option>
                        <option value='Dairy'>Dairy</option>
                        <option value='Fats'>Fats</option>
                        <option value='Treats'>Treats</option>
                    </select>
                    {food.category ? <select id='food-list' name='name' onChange={handleChanges}>{food.array.map((name,index) => <option key={index} value={name}>{name}</option>)} <option onChange={handleAddFood} >Add new food...</option></select> : <></>}
                    {/* {food.category ? <ButtonFoodName id='add-food-btn' type='submit' name='Add New Food' /> : <></> } */}
                    {/* <input name='name' placeholder='Name your food...' onChange={handleChanges}></input> */}
                    <Button type='submit' name='Next' />
                </form>
            </div>
        </Container>
    )
}