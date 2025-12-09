import { memo } from "react";
import Card from "./components/card";
import CardSkeleton from "./components/cards-skeletons";
import useArticles from "../../hooks/get-articles";

const SKELETON_COUNT = 4;
const SKELETON_ITEMS = Array.from({ length: SKELETON_COUNT }, (_, i) => i);

function Home() {
    const { articles, isLoading } = useArticles();

    return (
        <>
            <div className="w-full bg-bg-sections space-y-8 py-8 px-8">
                <h1 className="text-texts-main text-6xl text-center">
                    Ruan's AutoBlog
                </h1>
                <h2 className="text-texts-subtitles text-3xl text-center">
                    Insights on AI, programming, and the future of technology
                </h2>
            </div>

            <div className="flex flex-col py-4 md:flex-wrap gap-4 justify-center items-center">
                {!isLoading &&
                    articles?.map((article) => (
                        <Card key={String(article.id)} {...article} />
                    ))}
                {isLoading &&
                    SKELETON_ITEMS.map((index) => <CardSkeleton key={index} />)}
            </div>
        </>
    );
}

export default memo(Home);
