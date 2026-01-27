import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import GameDetailsPage from "./GameDetailsPage";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {path: "games", element: <ErrorPage />, errorElement: <ErrorPage />},
      { path: "games/:slug", element: <GameDetailsPage /> },
    ],
  },
]);

export default router;
