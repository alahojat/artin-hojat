import { useLoaderData } from "react-router-dom";
import { ArticleCards } from "../components/ArticleCards";
import { IArticle, IArticlesResponse } from "../models/IArticles";
import { useState } from "react";
import Pagination from "rc-pagination";

export const ArticlesPage = () => {
  const articles = useLoaderData() as IArticlesResponse;
  const [searchText, setSearchText] = useState<string>("");
  const [filteredArticles, setFilteredArticles] =
    useState<IArticle[]>(articles);
  const [pageIndex, setPageIndex] = useState(1);
  const articlesPerPage = 8;

  const handleSearch = () => {
    const filtered = articles.filter((article: IArticle) =>
      article.title.rendered.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredArticles(filtered);
    setPageIndex(1);
  };

  const clearSearch = () => {
    setSearchText("");
    setFilteredArticles(articles);
    setPageIndex(1);
  };

  const handlePageChange = (page: number) => {
    setPageIndex(page);
  };

  const indexOfLastArticle = pageIndex * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

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
        <ArticleCards articles={currentArticles} />
        <div>
          <Pagination
            current={pageIndex}
            total={filteredArticles.length}
            pageSize={articlesPerPage}
            showSizeChanger={true}
            showQuickJumper={false}
            itemRender={(page, type) => {
              if (type === "prev") {
                return <button className="text-steel">←</button>;
              }
              if (type === "next") {
                return <button className="text-steel">→</button>;
              }
              return (
                <button
                  className={`${
                    page === pageIndex ? "text-midnight" : "text-steel"
                  }`}
                >
                  {page}
                </button>
              );
            }}
            hideOnSinglePage={true}
            onChange={handlePageChange}
            className="row subheading-alt gap-3 text-steel"
          />
        </div>
      </section>
    </>
  );
};
