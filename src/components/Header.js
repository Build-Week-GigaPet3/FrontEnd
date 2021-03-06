import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useOnClickOutside } from '../hooks';
import Burger from './Burger/';
import Menu from './Menu/';

const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    background: #9090ff;
    border: none;
    color: white;
    height: 50px;
    width: 100vw;
    z-index: 10;
    .logo{
        width: 49%;
        text-align: left;
        padding-left: 10px;
        a {
            color: white;
            text-decoration: none;
        }
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
        width: 49%;
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
                <Link to='/'><h3>LambdiPet</h3></Link>
            </div>
            {/* <div className='welcome'>
                <p>Welcome to GigaPet</p>
            </div> */}
            <div className='menu' ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </HeaderStyled>
    )
}