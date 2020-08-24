import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  padding: 1em 2em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 70%;
`;
