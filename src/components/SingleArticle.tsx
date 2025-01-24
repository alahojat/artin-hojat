import { useLoaderData } from "react-router-dom";
import { IArticle, IMedia } from "../models/IArticles";
import { cleanContent } from "../utils/htmlParser";
import striptags from "striptags";
import parse from "html-react-parser";
import { GoBackBtn } from "./GoBackBtn";
import { StyledImg } from "./StyledImg";

export const SingleArticle = () => {
  const singleArticle = useLoaderData() as IArticle & { media: IMedia };

  return (
    <>
      <GoBackBtn></GoBackBtn>
      <article className="bg-ice pb-6 pt-2 lg:px-6">
        <div key={singleArticle.id}>
          <h2 className="article-heading font-bold lg:subheading-lg">
            {parse(singleArticle.title.rendered)}
          </h2>
          <div className="lg:grid lg:grid-cols-3 lg:gap-6">
            <StyledImg
              src={singleArticle.jetpack_featured_media_url}
              alt={singleArticle.media.alt_text}
              imgClassName="pb-2 sm:h-96 md:w-96 lg:h-96"
              figClassName="lg:col-span-1"
              photocred={striptags(singleArticle.media.caption.rendered)}
            ></StyledImg>
            <section className="sm:my-4 lg:col-span-2 lg:my-0">
              <p className="body-alt inline">
                {new Date(singleArticle.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <article className="excerpt mt-2">
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
