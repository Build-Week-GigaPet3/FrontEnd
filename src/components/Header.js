import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useOnClickOutside } from '../hooks';

import Burger from './Burger/';
import Menu from './Menu/';

const HeaderContainer = styled.div`
    width: 100%;
    background: #6C46A2;
    height: 10rem;
    color: #ffffff;
    display: flex;
    justify-content: center;

    .logo {
        width: 30%;
        font-family: 'Rancho', cursive;

        h1 {
            color: #ffffff;
            padding-top: 1rem;
            font-size: 3.6rem;
        }
    }

    .welcome {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        h2 {
            padding-bottom: 1rem;
            font-size: 2.4rem;
            font-weight: 400;
        }
    }

    .menu {
        padding-bottom: 1rem;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 30%;

        p {
            font-size: 1.6rem;
        }

        a {
            color: #ffffff;
            font-size: 1.6rem;
            text-decoration: none;
            transition: all 300ms;

            &:hover {
                transition: color 300ms;
                color: #c0c0c0;
            }
        }
    }
`;

export default function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <HeaderContainer>
            <div className="logo">
                <h1>Lambdi Pet</h1>
            </div>
            <div className="welcome">
                <h2>Welcome to Lambdi Pet</h2>
            </div>
            <div className="menu">
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className="menu">
                <Link to="/login">Login</Link>
            </div>
            <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </HeaderContainer>
    )
}