import { useLoaderData } from "react-router-dom";
import { ArticleCards } from "../components/ArticleCards";
import { IArticlesResponse } from "../models/IArticles";

export const ArticlesPage = () => {
  const articles = useLoaderData() as IArticlesResponse;
  return (
    <>
      <section className="base bg-chalk">
        <div className="lg:row mb-6 lg:items-center lg:justify-between">
          <h2 className="subheading">The Art in Science</h2>
        </div>
        <ArticleCards articles={articles}></ArticleCards>
      </section>
    </>
  );
};
