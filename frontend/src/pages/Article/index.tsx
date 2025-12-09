import { useParams } from "react-router-dom";
import { memo } from "react";

import ArticleSkeleton from "./components/article-skeleton";
import ArticleDetails from "./components/article";

import useArticleDetails from "../../hooks/get-article-details";

function Article() {
    const { id } = useParams();
    const { article, isLoading } = useArticleDetails(id || "");
    return (
        <>
            {!isLoading && article && <ArticleDetails {...article} />}
            {isLoading && <ArticleSkeleton />}
        </>
    );
}

export default memo(Article);
