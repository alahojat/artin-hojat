import { useLoaderData } from "react-router-dom";
import { IArticle, IMedia } from "../models/IArticles";
import { cleanContent } from "../utils/htmlParser";
import striptags from "striptags";
import parse from "html-react-parser";
import { GoBackBtn } from "./GoBackBtn";

export const SingleArticle = () => {
  const singleArticle = useLoaderData() as IArticle & { media: IMedia };

  return (
    <>
      <GoBackBtn></GoBackBtn>
      <article>
        <div key={singleArticle.id}>
          <h2 className="article-heading font-bold lg:subheading-lg">
            {singleArticle.title.rendered}
          </h2>

          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <div className="lg:col-span-1">
              <img
                src={singleArticle.jetpack_featured_media_url}
                alt={singleArticle.media.alt_text}
                loading="lazy"
                className="w-full object-cover pb-2 sm:h-96 md:w-96 lg:h-96"
              />
              <span className="photocred">
                Photo by: {striptags(singleArticle.media.caption.rendered)}
              </span>
            </div>
            <section className="sm:my-4 lg:col-span-2 lg:my-0">
              <p className="body-alt body-alt-light inline rounded bg-midnight-low px-2">
                {new Date(singleArticle.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <article className="excerpt mt-4">
                {parse(singleArticle.excerpt.rendered)}
              </article>
              <article>{cleanContent(singleArticle.content.rendered)}</article>
            </section>
          </div>
        </div>
      </article>
    </>
  );
};
