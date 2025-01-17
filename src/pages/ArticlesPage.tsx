import { useLoaderData } from "react-router-dom";
import { ArticleCards } from "../components/ArticleCards";
import { IArticlesResponse } from "../models/IArticles";

export const ArticlesPage = () => {
  const articles = useLoaderData() as IArticlesResponse;
  return (
    <>
      <section className="base bg-ice">
        <h2 className="subheading">The Art in Science</h2>
        <ArticleCards articles={articles}></ArticleCards>
      </section>
    </>
  );
};
