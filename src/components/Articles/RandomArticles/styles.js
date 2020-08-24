import styled from "styled-components";
export const RandomSection = styled.section`
  padding: 1em 2em;
  display: flex;
  flex-flow: column;
  min-height: 65vh;
  justify-content: center;
  align-items: center;
`;
export const SelectForm = styled.form`
  width: 80%;
  height: 200px;
  text-align: center;
  select {
    padding: 0.5em;
    margin: 1em 0;
    width: 80%;
    font-size: ${({ theme }) => theme.fonts.medium}px;
    outline: none;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    background-color: transparent;
  }
  button {
    margin: 1em 0;
    width: 20%;
    font-size: ${({ theme }) => theme.fonts.medium}px;
    padding: 0.5em;
    outline: none;
    background-color: ${({ theme }) => theme.colors.black};
    color: white;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.black};
    :hover {
      opacity: 0.8;
    }
  }
`;
