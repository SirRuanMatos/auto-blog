import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Article from "../pages/Article";
import Header from "../components/Header";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Header />
                <Home />
            </>
        ),
    },
    {
        path: "/articles/:id",
        element: (
            <>
                <Header />
                <Article />
            </>
        ),
    },
]);
