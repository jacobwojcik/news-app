import React, { useEffect, useState } from "react";
import Article from "./Article/Article";
import { ArticlesSection } from "./styles";
import { ListOfArticles } from "../../utils/reuse/styles";
const Articles = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch(
      "http://newsapi.org/v2/top-headlines?country=us&pageSize=16&apiKey=2fbcc91b204d434fb09c1ed52893aaa0"
    )
      .then((res) => res.json())
      .then((receivedData) => setData(receivedData["articles"]));
  };
  return (
    <ArticlesSection>
      <ListOfArticles>
        {data.map(({ title, author, urlToImage, description, url }) => (
          <li key={title}>
            <Article
              title={title}
              author={author}
              urlToImage={urlToImage}
              description={description}
              url={url}
            />
          </li>
        ))}
      </ListOfArticles>
    </ArticlesSection>
  );
};

export default Articles;
