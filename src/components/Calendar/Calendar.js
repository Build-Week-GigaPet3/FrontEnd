import React from 'react';
import { useSelector } from 'react-redux';
import useChartData from '../../hooks/useChartData'
import Chart from './Chart'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 462px;
    height: 100%;
    .chart{
        border-radius: 5px;
        width: 310px;
        height: 220px;
        background-color: rgba(255,255,255,0.7)
    }
    .title{
        margin-bottom: 20px;
        border-radius: 20px;
        text-align: center;
        h4{
            font-family: 'Rancho', cursive;
            font-size: 4rem;
        }
    }
    .btn-container-top{
        margin-top: 50px;
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

const Calendar = (props) =>{

  const logs = useSelector(state => state.parent.log)
  const [chartData, setChartData] = useChartData(logs);
  const username = sessionStorage.getItem('username');



  return (
        <Container>
            <div className='title'><h4>Awesome job<br/>{username}!</h4></div>
            <div className='chart'>
                <Chart chartData={chartData} setChartData={setChartData} />
            </div>
            <div className='btn-container-top'>
                <button id='one' className='delete-pet-btn' onClick={()=> props.history.push('/feedpet')}>Feed Pet</button>
                <button id='two' className='delete-pet-btn' onClick={()=> props.history.push('/dashboard')}>Return Home</button>
            </div>
        </Container>
    )
}

export default Calendar