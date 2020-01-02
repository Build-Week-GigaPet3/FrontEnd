import React from 'react';
import styled from 'styled-components';

// components
import ButtonLarge from './buttons/ButtonLarge';

export default function PhoneConfirm() {

    const ConfirmContainer = styled.div`

        h2 {
            color: #353535;
            font-size: 3.6rem;
            font-weight: 200;
            margin: 5rem 0;
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;

            input[type=text] {
                width: 5rem;
                height: 5rem;
                margin: 0 1rem;
                font-size: 3.6rem;
                color: #353535;
                text-align: center;
            }

            button {
                display: block;
            }

            .digits {
                margin-bottom: 30rem;
            }
        }
    `;

    return (
        <ConfirmContainer>
            <h2>Phone Number Sign Up</h2>
            <form>
                <div className="digits">
                    <input type="text" id="dig1" name="dig1" />
                    <input type="text" id="dig2" name="dig2" />
                    <input type="text" id="dig3" name="dig3" />
                    <input type="text" id="dig4" name="dig4" />
                </div>

                <ButtonLarge title="Sign Up" />
            </form>
        </ConfirmContainer>
    )
}