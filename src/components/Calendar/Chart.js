import React from 'react';
import {Polar} from 'react-chartjs-2'

const Chart = (props) => {

    return(
        <div style={{margin: '0 auto', marginTop: '-30px',width:'280px'}}>
        <Polar
        data={props.chartData}
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