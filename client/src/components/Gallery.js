import { useState } from "react";

export default function Gallery({ elements, render, elementsPerPage }) {
    const [galleryControls, setGalleryControls] = useState({
        start: 0,
        end: elementsPerPage,
        showPrev: false,
        // showNext: elementsPerPage >= elements.length,
        showNext: true,
        direction: true,
        length: elements.length,
    });

    const renderElements = (elements) => {
        return elements
            .slice(galleryControls.start, galleryControls.end)
            .map((element) => {
                return render(element);
            });
    };

    const changeStartEnd = (start, end, direction) => {
        if (direction) {
            start += elementsPerPage;
            end += elementsPerPage;
        } else {
            start -= elementsPerPage;
            end -= elementsPerPage;
        }
        let showPrev, showNext;
        if (start == 0) {
            showPrev = false;
        } else {
            showPrev = true;
        }
        if (end >= elements.length) {
            showNext = false;
        } else {
            showNext = true;
        }
        setGalleryControls({
            ...galleryControls,
            start,
            end,
            showPrev,
            showNext,
        });
    };

    return (
        <div className="galleryWrapper flex cc">
            {/* Prev Button */}
            <div>
                <button
                    className={
                        galleryControls.showPrev == true
                            ? "galleryControls"
                            : "galleryControls hideControls"
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        changeStartEnd(
                            galleryControls.start,
                            galleryControls.end,
                            false
                        );
                    }}
                >
                    <i className="material-icons">arrow_left</i>
                </button>
            </div>

            {/* Gallery */}
            <div className="gallery flex">
                {elements.length > 0 && renderElements(elements)}
            </div>

            {/* Next Button */}
            <div>
                <button
                    className={
                        galleryControls.showNext == true
                            ? "galleryControls"
                            : "galleryControls hideControls"
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        changeStartEnd(
                            galleryControls.start,
                            galleryControls.end,
                            true
                        );
                    }}
                >
                    <i className="material-icons">arrow_right</i>
                </button>
            </div>
        </div>
    );
}
