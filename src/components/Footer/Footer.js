import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: rgb(231, 225, 225);
  text-align: center;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  width: 50%;
  height: 200px;
  padding: 2em 1em;
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const StyledInput = styled.input`
  padding: 0.5em;
  font-size: 20px;
  outline: none;
  border: none;
  border-bottom: 2px solid black;
  width: 80%;
  background-color: transparent;
`;
const SubmitButton = styled.button`
  cursor: pointer;
  width: 10%;
  font-size: 20px;
  padding: 0.5em;
  outline: none;
  background-color: black;
  color: white;
  border: none;
  border-bottom: 2px solid black;
  :hover {
    opacity: 0.8;
  }
`;

const ScrollUp = styled.button`
  cursor: pointer;
  padding: 1em;
  transition: 100ms ease-in-out;
  background-color: white;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div style={{ display: "flex" }}>
        <FooterDiv>
          <h1>Follow #us</h1>
          <StyledUl>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Github</li>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Twitter</li>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Facebook</li>
            </a>
          </StyledUl>
        </FooterDiv>
        <FooterDiv>
          <h1>Newsletter</h1>
          <form>
            <StyledInput placeholder="Please enter your email address here" />
            <SubmitButton type="submit">OK</SubmitButton>
            {/* (click)="refresh()" */}
          </form>
          <p>Our terms</p>
          {/* style="color: grey; cursor: pointer;" */}
        </FooterDiv>
      </div>
      <ScrollUp type="button">
        {/* (click)="directToTop()" */}
        <h1>Back to top!</h1>
      </ScrollUp>
    </StyledFooter>
  );
};

export default Footer;
