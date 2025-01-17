import { IArticlesResponse } from "../models/IArticles";
import parse from "html-react-parser";

interface IDisplayArticlesProps {
  articles: IArticlesResponse;
}

export const ArticleCards = ({ articles }: IDisplayArticlesProps) => {
  const handleArticleClick = () => {
    console.log("is this working");
  };
  return (
    <section className="grid cursor-pointer grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-4">
      {articles.map((article) => (
        <div key={article.id} className="article-card mt-6 p-2">
          <p className="body m-0 pb-2">
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <img
            src={article.jetpack_featured_media_url}
            alt={article.title.rendered}
            className="w-full object-cover sm:h-52 lg:h-72"
          />
          <h3 onClick={handleArticleClick} className="subheading-alt">
            {article.title.rendered}
          </h3>
          <p className="body">{parse(article.excerpt.rendered)}</p>
        </div>
      ))}
    </section>
  );
};
