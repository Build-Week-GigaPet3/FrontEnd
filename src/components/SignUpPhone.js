import React from 'react';
import styled from 'styled-components';

// components
import ButtonLarge from './buttons/ButtonLarge';

export default function SignUpPhone() {

    const PhoneContainer = styled.div`
        color: #353535;
        display: flex;
        flex-direction: column;

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

            label {
                font-size: 1.8rem;
                text-align: left;
            }

            input[type=text] {
                width: 40.48rem;
                height: 6.4rem;
                border-radius: 0.5rem;
                border: 1px solid rgba(0, 0, 0, 0.25);
                margin: 1rem 0;
                font-size: 1.8rem;
                padding-left: 1rem;
            }

            button {
                display: block;
            }

            .phone {
                display: flex;
                flex-direction: column;
                margin-bottom: 30rem;
            }
        }
    `;

    return (
        <PhoneContainer>
            <h2>Phone Number Sign Up</h2>
            <form>
                <div className="phone">
                    <label for="phoneNumber">Enter Phone Number</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" />
                </div>

                <ButtonLarge title="Sign Up" />
            </form>
        </PhoneContainer>
    )
}