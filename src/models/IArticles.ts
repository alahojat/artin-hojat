export interface IArticle {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  jetpack_featured_media_url: string;
  featured_media: number;
}

export type IArticlesResponse = IArticle[];

export interface IMedia {
  id: number;
  caption: {
    rendered: string;
  };
  description: {
    rendered: string;
  };
  alt_text: string;
}
