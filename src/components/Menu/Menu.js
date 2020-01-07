import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({ open, setOpen }) => {
    const { isAuthenticated } = useSelector(state => state.authentication);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false)
    }

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
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
      {isAuthenticated && <Link to="/" onClick={handleLogout}>
        Logout
      </Link> }
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;