import { useState, useCallback } from "react";
import { useLoaderData } from "react-router-dom";
import Pagination from "rc-pagination";
import { IArticle, IArticlesResponse } from "../models/IArticles";
import { ArticleCards } from "../components/ArticleCards";
import { scrollToTop } from "../utils/scrollToTop";

export const ArticlesPage = () => {
  const articles = useLoaderData() as IArticlesResponse;
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");
  const [pageIndex, setPageIndex] = useState(1);
  const articlesPerPage = 8;

  const debounceSearch = useCallback(() => {
    let timer: NodeJS.Timeout;
    return (value: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        setDebouncedSearch(value);
      }, 500);
    };
  }, []);

  const handleSearchChange = debounceSearch();

  const filteredArticles = articles.filter((article: IArticle) =>
    article.title.rendered
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase()),
  );

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
      <div className="base-container flex-grow bg-ice">
        <section className="base">
          <h2 className="subheading mt-0">The art:in science</h2>
          <fieldset className="md:row mb-0 sm:mt-6 md:items-center lg:mt-6 lg:items-start">
            <input
              className="input"
              type="search"
              placeholder="Find an article"
              value={searchText}
              onChange={(e) => {
                const value = e.target.value;
                setSearchText(value);
                handleSearchChange(value);
                setPageIndex(1);
              }}
            />
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
                        className={`w-6 ${
                          page === pageIndex ? "text-midnight" : "text-steel"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  }}
                  hideOnSinglePage={true}
                  onChange={handlePageChange}
                  className="row body gap-6 text-xl text-steel"
                />
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
};
