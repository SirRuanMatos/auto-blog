import { Link } from "react-router-dom";
import type { ArticleProps } from "../../../../models";
import { memo } from "react";
import dayjs from "dayjs";

function Card({
    id,
    image,
    title,
    description,
    createdAt,
}: ArticleProps) {
    return (
        <Link
            to={`/articles/${id}`}
            className="flex flex-col space-y-4 w-full bg-bg-containers cursor-pointer rounded-lg p-8 hover:ring-4 hover:ring-elements/20 xl:flex-row xl:w-1/2"
        >
            <img
                className="rounded-lg  w-full h-40 mr-8 object-cover xl:w-max"
                src={`${image}`}
                alt="Imagem em Base64"
            />
            <div className="flex flex-col justify-between space-y-4">
                <h4 className="text-2xl text-texts-main font-medium">
                    {title}
                </h4>
                <div className="text-texts-subtitles">
                    <p>{description}</p>
                </div>
                <p className="text-elements">{dayjs(createdAt).format('DD/MM/YYYY')}</p>
            </div>
        </Link>
    );
}

export default memo(Card);
