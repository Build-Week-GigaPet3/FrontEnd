import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useOnClickOutside } from '../hooks';
import Burger from './Burger/';
import Menu from './Menu/';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: #6C46A2;
    color: white;
    height: 80px;
    width: 100vw;
    .logo{
        width: 32%;
        text-align: left;
        padding-left: 10px;
        h3{
            font-family: 'Rancho', cursive;
        }
    }
    .welcome{
        width: 32%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 6px;
        min-width: 120px;
    }
    .menu{
        width: 32%;
        display:flex;
        justify-content: flex-end;
        padding-right: 10px;
    }
`;

export default function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <HeaderStyled>
            <div className='logo'>
                <h3>GigaPet</h3>
            </div>
            <div className='welcome'>
                <p>Welcome to GigaPet</p>
            </div>
            <div className='menu' ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </HeaderStyled>
    )
}