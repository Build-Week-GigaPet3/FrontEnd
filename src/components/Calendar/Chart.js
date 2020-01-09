import React from 'react';
import useChartData from '../../hooks/useChartData'
import { useSelector } from 'react-redux';
import {Pie} from 'react-chartjs-2'

const Chart = (props) => {

    // console.log('chart.js:',props.logs)

    const [chartData, setChartData] = useChartData(props.logs);

    console.log(chartData)
    
    return(
        <div style={{margin: '0 auto', marginTop: '-30px',width:'280px'}}>
        <Pie
        data={chartData}
        width={280}
        height={280}
        options={{
            legend:{
                display:true,
                position: 'right'
            }
        }}
         />
        </div>
    )
}

export default Chart;