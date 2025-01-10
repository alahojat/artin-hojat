import { ArticleCards } from "../components/ArticleCards";

export const ArticlesPage = () => {
  return (
    <>
      <section className="max-w-7xl bg-ice p-4 pt-24">
        <h2 className="subheader">The art in Science</h2>
        <ArticleCards></ArticleCards>
      </section>
    </>
  );
};
