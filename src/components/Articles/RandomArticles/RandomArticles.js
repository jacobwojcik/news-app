import React, { useState } from "react";
import Article from "../Article/Article";
import { RandomSection, SelectForm } from "./styles";
import { ListOfArticles } from "../../../utils/reuse/styles";
const RandomArticles = () => {
  const [news, setNews] = useState({
    newsType: "Business",
    articles: [],
  });

  const loadData = async () => {
    await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=3&category=${news.newsType}&apiKey=2fbcc91b204d434fb09c1ed52893aaa0`
    )
      .then((res) => res.json())
      .then((receivedData) => setNews(receivedData["articles"]));

    console.log(news);
  };

  const handleChangeType = (e) => {
    setNews({ ...news, newsType: e.target.value });
  };
  return (
    <RandomSection>
      <SelectForm>
        <h1>Select category of your 3 news</h1>
        <select value={news.newsType} onChange={handleChangeType}>
          <option>Business</option>
          <option>Entertainment</option>
          <option>General</option>
          <option>Health</option>
          <option>Science</option>
          <option>Sports</option>
          <option>Technology</option>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();
            loadData();
          }}
        >
          Submit
        </button>
      </SelectForm>
      <ListOfArticles>
        {news.length > 0 &&
          news.map(({ title, author, urlToImage, description, url }) => (
            <li>
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
    </RandomSection>
  );
};

export default RandomArticles;
