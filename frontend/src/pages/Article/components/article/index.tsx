import { memo } from "react";
import dayjs from "dayjs";

import type { ArticleProps } from "../../../../models";

function Article({ image, title, createdAt, article }: ArticleProps) {
    return (
        <div className="w-full max-w-[100vw] space-y-4 xl:px-80 ">
            <div className="flex flex-col space-y-8 p-8 bg-bg-containers rounded-lg ">
                <img
                    className="rounded-lg  w-full object-fill"
                    src={`${image}`}
                    alt="Imagem em Base64"
                />
                <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100 text-center">
                    {title}
                </h1>
                <p className="text-lg text-texts-meta text-center">
                    {dayjs(createdAt).format("DD/MM/YYYY")}
                </p>

                <div
                    className="text-texts-subtitles antialiased space-y-6"
                    dangerouslySetInnerHTML={{
                        __html: article || "",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default memo(Article);
