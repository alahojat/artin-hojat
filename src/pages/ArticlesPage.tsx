import { useLoaderData } from "react-router-dom";
import { ArticleCards } from "../components/ArticleCards";
import { IArticle, IArticlesResponse } from "../models/IArticles";
import { useState } from "react";

export const ArticlesPage = () => {
  const articles = useLoaderData() as IArticlesResponse;
  const [searchText, setSearchText] = useState<string>("");
  const [filteredArticles, setFilteredArticles] =
    useState<IArticle[]>(articles);

  const handleSearch = () => {
    console.log("search word:", searchText);
    const filtered = articles.filter((article: IArticle) =>
      article.title.rendered.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredArticles(filtered);
    console.log("What is filtered articles", filteredArticles);
    console.log("What is filtered", filtered);
  };

  const clearSearch = () => {
    console.log("clear search?");
    setSearchText("");
    setFilteredArticles(articles);
  };

  return (
    <>
      <section className="base bg-chalk">
        <h2 className="subheading">The Art in Science</h2>
        <div className="lg:col mb-6 lg:items-start lg:justify-between">
          <input
            className="input"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="lg:row">
            <button
              className="button button-secondary-dark"
              onClick={clearSearch}
            >
              Clear
            </button>
            <button className="button" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <ArticleCards articles={filteredArticles}></ArticleCards>
      </section>
    </>
  );
};
