import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .pets {
        width: 40%;
        height: 180px;
        max-width: 400px;
        min-width: 310px;
        border: 1px solid red;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        .pet{
            width: 150px;
            height: 150px;
            border: 1px solid blue;
        }
    }
`;

export default function ChoosePet() {

    return (
        <Container>
            <div><h3>Welcome User Name!</h3></div>
            <div><h4>Choose your pet:</h4></div>
            <div className='pets'>
                <div className='pet'>Pet1</div>
                <div className='pet'>Pet2</div>
            </div>
            <div className='pets'>
                <div className='pet'>Pet3</div>
                <div className='pet'>Pet4</div>
            </div>
        </Container>
    )
}

















// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: space-evenly;
//     color: white;
// `;

// export default function ChoosePet() {

//     return (
//         <Container>
//         </Container>
//     )
// }