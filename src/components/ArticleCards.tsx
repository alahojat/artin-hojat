import { Link } from "react-router-dom";
import { IArticle } from "../models/IArticles";
import parse from "html-react-parser";
import { StyledImg } from "./StyledImg";
import { scrollToTop } from "../utils/scrollToTop";

interface IArticlesCardProps {
  articles: IArticle[];
}

export const ArticleCards = ({ articles }: IArticlesCardProps) => {
  const handleClick = () => {
    scrollToTop("auto");
  };
  return (
    <section className="grid grid-cols-1 gap-0 md:grid-cols-3 lg:mt-4 lg:grid-cols-4">
      {articles.map((article) => (
        <div
          key={article.id}
          className="article-card intersect:motion-preset-fade mt-6 p-2"
        >
          <p className="body-alt inline rounded bg-orange px-2">
            {new Date(article.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <StyledImg
            src={article.jetpack_featured_media_url}
            alt={article.title.rendered}
            imgClassName="my-2 sm:h-52 lg:h-72"
          ></StyledImg>
          <Link
            to={`/articles/${article.id}`}
            className="subheading-alt cursor-pointer hover:text-midnight hover:underline"
            onClick={handleClick}
          >
            {parse(article.title.rendered)}
          </Link>
          <article className="body">{parse(article.excerpt.rendered)}</article>
          <Link
            to={`/articles/${article.id}`}
            className="cursor-pointer hover:text-midnight hover:underline"
            onClick={handleClick}
          >
            <p
              aria-label="Read more about this article"
              className="body-alt m-0 hover:text-midnight hover:underline"
            >
              Read more
            </p>
          </Link>
        </div>
      ))}
    </section>
  );
};
