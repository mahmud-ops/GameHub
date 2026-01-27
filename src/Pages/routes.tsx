import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import GameDetailsPage from "./GameDetailsPage";

const router = createBrowserRouter([
    {path: '/', element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            {path: 'games/:id', element: <GameDetailsPage />}
        ]
    }
])

export default router;