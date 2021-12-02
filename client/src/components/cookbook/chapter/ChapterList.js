// components
import Chapter from "./Chapter";

// hooks
import { useSelector } from "react-redux";

export default function ChapterList() {
    const chapters = useSelector((state) => state.chapters);

    const renderChapters = () => {
        // console.log("...(ChapterList) chapters: ", chapters);
        return chapters.map((chapter) => {
            return (
                <li key={chapter.id}>
                    <h2 className="chapterHeading">{chapter.category}</h2>
                    <Chapter chapter_id={chapter.id}></Chapter>
                </li>
            );
        });
    };

    return (
        <div className="chapterListWrapper flex cc fcolumn">
            <ul className="flex jcc fcolumn">
                {chapters.length > 0 && renderChapters()}
            </ul>
        </div>
    );
}
