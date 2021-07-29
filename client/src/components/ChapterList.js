import { useSelector } from "react-redux";

//components
import Chapter from "./Chapter";

export default function ChapterList() {
    const chapters = useSelector((state) => state.chapters);

    const chaptersTEST = [
        {
            id: 1,
            category: "Salad",
        },
        {
            id: 2,
            category: "Soup",
        },
        {
            id: 3,
            category: "Dessert",
        },
        {
            id: 4,
            category: "Cocktails",
        },
    ];

    const renderChapters = () => {
        return chaptersTEST.map((chapter) => {
            return (
                <li key={chapter.id}>
                    <h1>{chapter.category}</h1>
                    <Chapter chapter_id={chapter.id}></Chapter>
                </li>
            );
        });
    };
    return (
        <div className="chapterListWrapper flex cc fcolumn">
            ChapterList Component
            <ul className="flex jcc fcolumn">
                {chaptersTEST.length > 0 && renderChapters()}
            </ul>
        </div>
    );
}
