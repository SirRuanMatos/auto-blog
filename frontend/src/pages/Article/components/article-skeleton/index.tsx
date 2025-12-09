import { memo } from "react";

const SKELETON_COUNT = 30;
const SKELETON_ITEMS = Array.from({ length: SKELETON_COUNT }, (_, i) => i);

function ArticleSkeleton() {
    return (
        <div className="w-full max-w-[100vw] space-y-4 xl:px-80 ">
            <div className="flex flex-col space-y-8 p-8 bg-bg-containers rounded-lg ">
                <div className="rounded-lg w-full h-120 object-cover animate-pulse bg-elements" />
                <div className="rounded-lg w-full h-10 object-cover animate-pulse bg-elements" />
                <div className="rounded-lg w-full h-10 object-cover animate-pulse bg-elements" />
                <div className="flex justify-center">
                    <div className="rounded-lg w-30 h-5 object-cover animate-pulse bg-elements" />
                </div>
                <div className="space-y-4">
                    {SKELETON_ITEMS.map((index) => (
                        <div
                            key={index}
                            className="rounded-lg w-full h-2 object-cover animate-pulse bg-elements"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default memo(ArticleSkeleton);
