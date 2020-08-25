import React, { useState } from "react";
import Article from "../Article/Article";
import { RandomSection, SelectForm } from "./styles";
import { ListOfArticles } from "../../../utils/reuse/styles";
const RandomArticles = () => {
  const [news, setNews] = useState({
    newsType: "",
    articles: [],
  });

  const loadData = async () => {
    await fetch(
      `https://saurav.tech/NewsAPI/top-headlines/category/${news.newsType}/gb.json`
    )
      .then((res) => res.json())
      .then((receivedData) => setNews(receivedData["articles"]));

    console.log(news);
  };

  const handleChangeType = (e) => {
    setNews({ ...news, newsType: e.target.value.toLowerCase() });
  };
  return (
    <RandomSection>
      <SelectForm>
        <h1>Select category of your 3 news</h1>
        <select onChange={handleChangeType}>
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
          news
            .slice(0, 3)
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
    </RandomSection>
  );
};

export default RandomArticles;
