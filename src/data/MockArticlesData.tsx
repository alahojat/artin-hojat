import articleImg from "../assets/article.jpg";

export const articles: {
  id: number;
  dateCreated: string;
  img: string;
  title: string;
  body: string;
}[] = [
  {
    id: 1,
    dateCreated: "2025-01-01",
    img: articleImg,
    title: "Exploring the Art of Performance",
    body: "Discover how performance optimization techniques can elevate both athletes and professionals in their respective fields.",
  },
  {
    id: 2,
    dateCreated: "2025-01-03",
    img: articleImg,
    title: "The Intersection of Sports and Anime",
    body: "Dive into how sports and anime share values of discipline, storytelling, and inspiration.",
  },
  {
    id: 3,
    dateCreated: "2025-01-05",
    img: articleImg,
    title: "Fueling the Future: Nutrition for Athletes",
    body: "Learn about the essential role nutrition plays in optimizing athletic performance and recovery.",
  },
  {
    id: 4,
    dateCreated: "2025-01-07",
    img: articleImg,
    title: "The Science of Recovery",
    body: "Uncover cutting-edge techniques and strategies for recovery in high-performance sports.",
  },
  {
    id: 5,
    dateCreated: "2025-01-10",
    img: articleImg,
    title: "Basketball Beyond the Court",
    body: "Explore the cultural and societal impact of basketball and its influence on the global stage.",
  },
  {
    id: 6,
    dateCreated: "2025-01-12",
    img: articleImg,
    title: "Strength Training Myths Debunked",
    body: "Break down common misconceptions about strength training and how it benefits overall health.",
  },
  {
    id: 7,
    dateCreated: "2025-01-15",
    img: articleImg,
    title: "The Role of Mental Health in Sports",
    body: "Learn why mental health is as critical as physical training for athletes in achieving their best.",
  },
];
