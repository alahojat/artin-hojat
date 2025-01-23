import { useLoaderData } from "react-router-dom";
import { ArticleCards } from "../components/ArticleCards";
import { IArticle, IArticlesResponse } from "../models/IArticles";
import { useState } from "react";
import Pagination from "rc-pagination";
import { GoBackBtn } from "../components/GoBackBtn";

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
    window.scroll({
      top: 0,
      left: 0,
      behavior: "auto",
    });
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
        <GoBackBtn></GoBackBtn>
        <h2 className="subheading mt-0">The Art in Science</h2>
        <div className="lg:row mb-6 lg:mt-6 lg:items-start">
          <input
            className="input lg:mt-4"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div className="lg:row">
            <button className="button button-tertiary" onClick={handleSearch}>
              Search
            </button>
            <button
              className="button button-secondary-dark"
              onClick={clearSearch}
            >
              Clear
            </button>
          </div>
        </div>

        <ArticleCards articles={currentArticles} />
        <div className="col items-center justify-center">
          <Pagination
            current={pageIndex}
            total={filteredArticles.length}
            pageSize={articlesPerPage}
            showSizeChanger={true}
            showQuickJumper={false}
            itemRender={(page, type) => {
              if (type === "prev" || type === "next") {
                return null;
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
            className="row body gap-3 text-steel"
          />
        </div>
      </section>
    </>
  );
};
