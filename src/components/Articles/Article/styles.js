import styled from "styled-components";

export const StyledArticle = styled.div`
  width: 400px;
  margin: 20px 10px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
  height: 600px;
  background-color: white;
  transition: 200ms;
  padding: 1em;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;
  h1 {
    text-align: center;
  }
  img {
    width: 100%;
  }
  :hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);
  }
  p:last-of-type {
    text-align: center;
  }
`;
export const ReadMoreButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fonts.medium}px;
  font-weight: bold;
  border: none;
  outline: none;
  color: white;
  padding: 1em 2.5em;
`;
