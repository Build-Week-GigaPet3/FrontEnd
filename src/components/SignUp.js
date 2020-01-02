import React from 'react';
import styled from 'styled-components';

// components
import GoogleSignUp from './buttons/GoogleSignUp';
import PhoneSignUp from './buttons/PhoneSignUp';
import ButtonLarge from './buttons/ButtonLarge';

const SignUpContainer = styled.div`
    color: #353535;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;

    h2 {
        font-size: 3.6rem;
        font-weight: 200;
        margin: 5rem 0;
    }

    h3 {
        font-size: 3rem;
        font-weight: 200;
        margin: 1rem 0;
    }

    form {
        display: flex;
        flex-direction: column;
        font-weight: 200;

        label {
            font-size: 1.8rem;
            text-align: left;
        }

        input[type=text] {
            width: 30.28rem;
            height: 5.7rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.25);
            margin: 1rem 0;
            font-size: 1.8rem;
            padding-left: 1rem;
        }

        input[type=password] {
            width: 30.28rem;
            height: 5.7rem;
            border-radius: 0.5rem;
            border: 1px solid rgba(0, 0, 0, 0.25);
            margin: 1rem 0;
            font-size: 1.8rem;
            padding-left: 1rem;
        }

        .submit {
            margin-top: 5rem;
        }
`;

export default function SignUp() {

    return (
        <SignUpContainer>
            <h2>How would you like to sign up?</h2>
            <GoogleSignUp />
            <PhoneSignUp />
            <h3>Or</h3>

            {/* Begin Form */}

            <form>
                <label for="email">Enter Email</label>
                <input type="text" id="email" name="email" />

                <label for="password">Enter Password</label>
                <input type="password" id="password" name="password" />

                <label for="passwordConfirmation">Re-Enter Password</label>
                <input type="password" id="passwordConfirmation" name="passwordConfirmation" />
                
                <div className="submit">
                    <ButtonLarge title="Submit" />
                </div>
            </form>

            {/* End Form */}

        </SignUpContainer>
    )
}