import { memo } from "react";

function CardSkeleton() {
    return (
        <div className="flex flex-col space-y-4 w-full bg-bg-containers cursor-pointer rounded-lg p-8 hover:ring-4 hover:ring-elements/20 md:flex-row md:w-1/2">
            <div className="rounded-lg w-full h-40 mr-8 object-cover md:w-1/3 animate-pulse bg-elements" />
            <div className="space-y-4 w-full">
                <div className="rounded-lg w-full h-8  block object-cover animate-pulse bg-elements" />
                <div className="rounded-lg w-full h-8  block object-cover animate-pulse bg-elements" />
                <div className="space-y-2">
                    <div className="rounded-lg w-full h-2  block object-cover animate-pulse bg-elements" />
                    <div className="rounded-lg w-full h-2  block object-cover animate-pulse bg-elements" />
                    <div className="rounded-lg w-full h-2  block object-cover animate-pulse bg-elements" />
                </div>
                <div className="rounded-lg w-1/6 h-2  block object-cover animate-pulse bg-elements" />
            </div>
        </div>
    );
}

export default memo(CardSkeleton);
