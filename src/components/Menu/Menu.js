import React from 'react';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
  return (
    <StyledMenu open={open}>
      <Link to="/signup" onClick={handleClose}>
        Sign Up
      </Link>
      <Link to="/login" onClick={handleClose}>
        Login
      </Link>
      <Link to="/logout" onClick={handleClose}>
        Logout
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;