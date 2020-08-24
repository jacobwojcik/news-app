import React from "react";
import { StyledArticle, ReadMoreButton } from "./styles";
const Article = ({ title, author, urlToImage, description, url }) => {
  return (
    <StyledArticle>
      <h1>{title}</h1>
      <img src={urlToImage} alt="Pics not found :(" />
      <p>{description}</p>
      <p>Author: {author}</p>
      <ReadMoreButton as="a" href={url} target="_blank">
        Read more
      </ReadMoreButton>
    </StyledArticle>
  );
};

export default Article;
