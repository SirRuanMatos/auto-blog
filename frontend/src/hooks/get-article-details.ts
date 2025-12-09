import { useState, useEffect, useRef, useMemo } from "react";
import api from "../api/api";
import type { ArticleProps } from "../models";

const useArticleDetails = (articleId: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [article, setArticle] = useState<ArticleProps | undefined>();
    const hasFetched = useRef(false);

    

    useEffect(() => {
        if (hasFetched.current) return;
        hasFetched.current = true;

        const getArticles = async () => {
            try {
                setIsLoading(true);
                const response = await api.get(`/articles/${articleId}`);
                setIsLoading(false);
                setArticle(response.data);
            } catch (error) {
                console.error("Error fetching article:", error);
                setIsLoading(false);    
            }
        };

        getArticles();
    }, [articleId]);

    return useMemo(() => ({ article, isLoading }), [article, isLoading]);
};

export default useArticleDetails;
