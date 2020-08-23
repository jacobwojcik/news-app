import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  color: black;
  padding: 1em 2em;
  border-bottom: 1px solid rgb(200, 200, 200);
`;
const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;

const Header = () => {
  return (
    <StyledHeader id="header">
      <h1>News</h1>
      <Navbar>
        <li>
          <Link to="">Our news</Link>
        </li>
        <li>
          <Link to="/random">Random news</Link>
        </li>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
