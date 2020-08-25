import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: rgb(231, 225, 225);
  text-align: center;
`;
export const Outer = styled.div`
  display: flex;
  ${({ theme }) => theme.media.tablet} {
    flex-flow: column;
  }
`;
export const FooterDiv = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  width: 50%;
  height: 200px;
  padding: 2em 1em;
  form {
    padding: 0.5em;
  }
  ${({ theme }) => theme.media.tablet} {
    width: 100%;
    padding: 2em 1em;
    height: auto;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ theme }) => theme.media.phone} {
    padding: 1em 0;
  }
`;
export const StyledInput = styled.input`
  padding: 0.5em;
  font-size: ${({ theme }) => theme.fonts.medium}px;
  outline: none;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.black};
  width: 80%;
  background-color: transparent;
  ${({ theme }) => theme.media.phone} {
    font-size: ${({ theme }) => theme.fonts.small}px;
    width: 80%;
  }
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
  ${({ theme }) => theme.media.phone} {
    width: 20%;
    font-size: ${({ theme }) => theme.fonts.small}px;
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
