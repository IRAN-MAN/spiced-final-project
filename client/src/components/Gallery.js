import { useEffect, useState } from "react";

export default function Gallery({ elements, render, elementsPerPage }) {
    const [galleryControls, setGalleryControls] = useState({
        start: 0,
        end: 0,
        hidePrev: true,
        hideNext: false,
        direction: true,
        length: 1,
    });

    useEffect(async () => {
        setGalleryControls({
            start: 1,
            end: 2,
            hidePrev: true,
            hideNext: false,
            direction: false,
            length: elements.length,
        });
        console.log("Gallery: elements: ", elements);
    }, []);

    const renderElements = (elements) => {
        console.log(
            "renderPhotos start, end",
            galleryControls.start,
            galleryControls.end
        );
        return elements
            .slice(galleryControls.start, galleryControls.end)
            .map((element) => {
                return (
                    <div className="" key={element.id}>
                        {render(element)}
                    </div>
                );
            });
    };

    const changeStartEnd = (start, end, direction) => {
        // console.log("...(ACTIONS setPhotoPicker) start/end: ", start, end);

        if (direction) {
            start += elementsPerPage;
            end += elementsPerPage;
        } else {
            start -= elementsPerPage;
            end -= elementsPerPage;
        }
        let hidePrev, hideNext;
        if (start < 1) {
            hidePrev = true;
        } else {
            hidePrev = false;
        }
        if (end >= elements.length) {
            hideNext = true;
        } else {
            hideNext = false;
        }
        setGalleryControls({
            ...galleryControls,
            start,
            end,
            hidePrev,
            hideNext,
        });
    };

    return (
        <div className="galleryWrapper">
            {/* Prev Button */}
            <div>
                <button
                    className={
                        !galleryControls.hidePrev
                            ? "photoPickerControls"
                            : "photoPickerControls hideButton"
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        changeStartEnd(
                            galleryControls.start,
                            galleryControls.end,
                            false
                        );
                        console.log(
                            "...(CLICK PREV) galleryControls: ",
                            galleryControls
                        );
                    }}
                >
                    <i className="material-icons">arrow_left</i>
                </button>
            </div>

            {/* Gallery */}
            <div className="gallery">
                {elements.length > 0 && renderElements(elements)}
            </div>

            {/* Next Button */}
            <div>
                <button
                    className={
                        !galleryControls.hideNext
                            ? "photoPickerControls"
                            : "photoPickerControls hideButton"
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        changeStartEnd(
                            galleryControls.start,
                            galleryControls.end,
                            true
                        );
                        console.log(
                            "...(CLICK NEXT) galleryControls: ",
                            galleryControls
                        );
                    }}
                >
                    <i className="material-icons">arrow_right</i>
                </button>
            </div>
        </div>
    );
}
