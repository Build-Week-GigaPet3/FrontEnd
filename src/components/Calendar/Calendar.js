import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
`;

const Calendar = (props) =>{

  const logs = useSelector(state => state.parent.log)
  const [chartData, setChartData] = useChartData(logs);

  console.log(chartData)

  return (
        <Container>
            <div className='chart'>
                <Chart logs={logs} />
            </div>
        </Container>
    )
}

export default Calendar