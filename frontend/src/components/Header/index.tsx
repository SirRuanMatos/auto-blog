import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleTitleClick = () => {
        navigate("/");
    };

    return (
        <>
            <div className="flex justify-between w-full py-8 items-center">
                <h1
                    onClick={handleTitleClick}
                    className="text-hovers text-2xl md:text-3xl font-medium cursor-pointer"
                >
                    Ruans AutoBlog
                </h1>
            </div>
        </>
    );
}
