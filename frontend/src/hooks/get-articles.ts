import { useState, useEffect, useRef, useMemo } from "react";
import api from "../api/api";
import type { ArticleProps } from "../models";

const useArticles = () => {
    const [articles, setArticles] = useState<ArticleProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const hasFetched = useRef(false);

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const getArticles = async () => {
            try {
                setIsLoading(true);
                const response = await api.get("/articles");
                setArticles(response.data.articles);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching articles:", error);
                setIsLoading(false);
            }
        };

        getArticles();
    }, []);

    return useMemo(() => ({ articles, isLoading }), [articles, isLoading]);
};

export default useArticles;
