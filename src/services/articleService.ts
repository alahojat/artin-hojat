import { IArticle, IArticlesResponse } from "../models/IArticles";

import { get } from "./serviceBase";

const BASE_URL = "http://13.53.176.130/wp-json/wp/v2/posts";

export const getArticles = async (): Promise<IArticlesResponse> => {
  try {
    const response = await get<IArticlesResponse>(BASE_URL);

    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error;
  }
};

export const getArticleById = async (id: number): Promise<IArticle> => {
  try {
    const response = await get<IArticle>(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};
