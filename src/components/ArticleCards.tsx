import { NavLink } from "react-router-dom";
import { articles } from "../data/MockArticlesData";

export const ArticleCards = () => {
  const handleArticleClick = () => {
    console.log("is this working");
    <NavLink to={"/articles/:id"}></NavLink>;
  };
  return (
    <section
      className="grid cursor-pointer grid-cols-1 gap-0 md:grid-cols-3 lg:grid-cols-4"
      onClick={handleArticleClick}
    >
      {articles.map((article) => (
        <div key={article.id} className="article-card mt-6 p-2">
          <p className="body m-0 pb-2">{article.dateCreated}</p>
          <img
            src={article.img}
            alt={article.title}
            className="w-full object-cover sm:h-52 lg:h-72"
          />
          <h3 className="subheading-alt">{article.title}</h3>
          <p className="body">{article.body}</p>
        </div>
      ))}
    </section>
  );
};
