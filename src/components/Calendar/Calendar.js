import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Chart from './Chart'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 462px;
    height: 100%;
`;

const Calendar = (props) =>{

    const logs = useSelector(state => state.parent.log)

  return (
        <Container>
            <Chart logs={logs} />
        </Container>
    )
}

export default Calendar