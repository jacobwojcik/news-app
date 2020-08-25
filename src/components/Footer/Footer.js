import React from "react";
import {
  StyledFooter,
  Outer,
  FooterDiv,
  StyledUl,
  StyledInput,
  SubmitButton,
  ScrollUp,
} from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Outer>
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
            <StyledInput placeholder="Please enter your email address" />
            <SubmitButton type="submit">OK</SubmitButton>
          </form>
          <p>Our terms</p>
          {/* style="color: grey; cursor: pointer;" */}
        </FooterDiv>
      </Outer>
      <ScrollUp as="a" href="#header">
        {/* (click)="directToTop()" */}
        <h1>Back to top!</h1>
      </ScrollUp>
    </StyledFooter>
  );
};

export default Footer;
