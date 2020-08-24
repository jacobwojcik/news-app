import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, Navbar } from "./styles";

const Header = () => {
  return (
    <StyledHeader id="header">
      <h1>News</h1>
      <Navbar>
        <li>
          <Link to="/">Our news</Link>
        </li>
        <li>
          <Link to="/random">Random news</Link>
        </li>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
