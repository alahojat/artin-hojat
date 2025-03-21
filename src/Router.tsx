import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { AboutPage } from "./pages/AboutPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { MeritsPage } from "./pages/MeritsPage";
import { ContactPage } from "./pages/ContactPage";
import { PlayerPage } from "./pages/PlayerPage";
import { SingleArticlesPage } from "./pages/SingleArticlesPage";
import { articlesLoader, singleArticleLoader } from "./loaders/articleLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
      {
        path: "/articles",
        element: <ArticlesPage></ArticlesPage>,
        loader: articlesLoader,
      },
      {
        path: "/articles/:id",
        element: <SingleArticlesPage></SingleArticlesPage>,
        loader: singleArticleLoader,
      },
      {
        path: "/merits",
        element: <MeritsPage></MeritsPage>,
      },
      {
        path: "/player-optimization",
        element: <PlayerPage></PlayerPage>,
      },
    ],
  },
]);
