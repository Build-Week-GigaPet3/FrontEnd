import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { useOnClickOutside } from '../hooks';

import Burger from './Burger/';
import Menu from './Menu/';

const HeaderStyled = styled.header`

`;

export default function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <HeaderStyled>
            <div className='menu'ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
            </div>
        </HeaderStyled>
    )
}