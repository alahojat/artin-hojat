import { useLoaderData } from "react-router-dom";
import { ArticleCards } from "../components/ArticleCards";
import { IArticle, IArticlesResponse } from "../models/IArticles";
import { useState } from "react";
import Pagination from "rc-pagination";
import { scrollToTop } from "../utils/scrollToTop";

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
    scrollToTop("auto");
  };

  const indexOfLastArticle = pageIndex * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle,
  );

  return (
    <>
      <div className="base-container bg-ice">
        <section className="base">
          <h2 className="subheading mt-0">The art:in science</h2>
          <fieldset className="md:row mb-0 sm:mt-6 md:items-center lg:mt-6 lg:items-start">
            <input
              className="input"
              type="text"
              value={searchText}
              placeholder="Find an article"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className="row">
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
          </fieldset>
          {filteredArticles.length === 0 ? (
            <p className="body mt-6 text-center">
              No articles were found, please try using another word!
            </p>
          ) : (
            <>
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
            </>
          )}
        </section>
      </div>
    </>
  );
};
