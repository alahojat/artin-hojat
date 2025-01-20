import { IArticle, IArticlesResponse, IMedia } from "../models/IArticles";
import { get } from "./serviceBase";

const BASE_URL = "https://www.artinhojat.com/wp-json/wp/v2/posts";

const MEDIA_URL = "https://artinhojat.com/wp-json/wp/v2/media";

// Fetch all articles
export const getArticles = async (): Promise<IArticlesResponse> => {
  try {
    const response = await get<IArticlesResponse>(BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};

export const getArticleById = async (
  id: number,
): Promise<IArticle & { media?: IMedia }> => {
  try {
    const response = await get<IArticle>(`${BASE_URL}/${id}`);
    const article = response.data;

    if (article.featured_media) {
      const media = await getArticleMedia(article.featured_media);
      return { ...article, media };
    }

    return article;
  } catch (error) {
    console.error(`Error fetching article with ID ${id}:`, error);
    throw error;
  }
};

export const getArticleMedia = async (mediaId: number): Promise<IMedia> => {
  try {
    const response = await get<IMedia>(`${MEDIA_URL}/${mediaId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching media with ID ${mediaId}:`, error);
    throw error;
  }
};
