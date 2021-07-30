import { useSelector } from "react-redux";
import { chaptersTEST } from "./TESTDATA.js";
//components
import Chapter from "./Chapter";

export default function ChapterList() {
    const chapters = useSelector((state) => state.chapters);

    const renderChapters = () => {
        console.log("...(ChapterList) chapters: ", chapters);
        return chapters.map((chapter) => {
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
                {chapters.length > 0 && renderChapters()}
            </ul>
        </div>
    );
}
