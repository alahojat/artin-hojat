import { Link } from "react-router-dom";
import { IArticle } from "../models/IArticles";
import parse from "html-react-parser";

interface IArticlesCardProps {
  articles: IArticle[];
}

export const ArticleCards = ({ articles }: IArticlesCardProps) => {
  return (
    <section className="grid grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-4">
      {articles.map((article) => (
        <div key={article.id} className="article-card mt-6 p-2">
          <p className="body-alt body-alt-light inline rounded bg-midnight px-2">
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <img
            src={article.jetpack_featured_media_url}
            alt={article.title.rendered}
            loading="lazy"
            className="my-2 w-full object-cover sm:h-52 lg:h-72"
          />
          <Link
            to={`/articles/${article.id}`}
            className="subheading-alt cursor-pointer hover:text-midnight hover:underline"
          >
            {article.title.rendered}
          </Link>
          <article className="body">{parse(article.excerpt.rendered)}</article>
        </div>
      ))}
    </section>
  );
};
