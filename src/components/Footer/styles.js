import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: rgb(231, 225, 225);
  text-align: center;
`;

export const FooterDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  width: 50%;
  height: 200px;
  padding: 2em 1em;
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const StyledInput = styled.input`
  padding: 0.5em;
  font-size: ${({ theme }) => theme.fonts.medium}px;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  width: 80%;
  background-color: transparent;
`;
export const SubmitButton = styled.button`
  cursor: pointer;
  width: 10%;
  font-size: ${({ theme }) => theme.fonts.medium}px;
  padding: 0.5em;
  outline: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  :hover {
    opacity: 0.8;
  }
`;

export const ScrollUp = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding: 1em;
  transition: 100ms ease-in-out;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;

  outline: none;
  width: 100%;
  height: 100%;
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
  }
`;
