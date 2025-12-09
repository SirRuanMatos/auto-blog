import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/Article";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/articles/:id",
        element: <Article />,
    },
]);
