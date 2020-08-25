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
    await fetch("https://saurav.tech/NewsAPI/everything/bbc-news.json")
      .then((res) => res.json())
      .then((receivedData) => setData(receivedData["articles"]));
  };
  return (
    <ArticlesSection>
      <ListOfArticles>
        {data.length > 0 &&
          data
            .slice(0, 16)
            .map(({ title, author, urlToImage, description, url }) => (
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
