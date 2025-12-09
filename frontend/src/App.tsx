import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <div className="min-h-screen bg-bg-main flex flex-col px-8">
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </div>
    </StrictMode>
);
