import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #161616;
  color: #fffbfb;
  padding: 15px;
`;

const Navbar: React.FC = () => {
  return (
    <StyledNavbar>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </StyledNavbar>
  );
};

export default Navbar;
