import { Params } from "react-router-dom";
import { IArticle } from "../models/IArticles";
import { getArticleById, getArticles } from "../services/articleService.ts";

export const articlesLoader = async (): Promise<IArticle[]> => {
  return await getArticles();
};

interface IArticleLoader {
  params: Params<string>;
}

export const singleArticleLoader = async ({
  params,
}: IArticleLoader): Promise<IArticle> => {
  if (!params.id) {
    throw new Error("Article ID is required to load the article.");
  }

  return await getArticleById(Number(params.id));
};
