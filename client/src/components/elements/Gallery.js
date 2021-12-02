import { useState, useEffect } from "react";

export const Gallery = ({ elements, render, elementsPerPage }) => {
    console.log("elementsperpage:", elementsPerPage, elements.length);
    const [galleryControls, setGalleryControls] = useState({
        start: 0,
        end: elementsPerPage,
        hidePrev: true,
        hideNext: elementsPerPage >= elements.length,
        // showNext: true,
        length: elements.length,
    });

    const renderElements = (elements) => {
        return elements
            .slice(galleryControls.start, galleryControls.end)
            .map((element, id) => {
                return render(element, id);
            });
    };

    //-------
    const previous = () => {
        loadPreviousElements();
        if (isFirst()) {
            hidePreviousButton();
        }
    };
    const next = () => {
        loadNextElements();
        if (isLast()) {
            hideNextButton();
        }
    };
    //--------

    const loadPreviousElements = () => {
        setGalleryControls({
            ...galleryControls,
            start: galleryControls.start - elementsPerPage,
            end: galleryControls.end - elementsPerPage,
        });
    };
    const loadNextElements = () => {
        setGalleryControls({
            ...galleryControls,
            start: galleryControls.start + elementsPerPage,
            end: galleryControls.end + elementsPerPage,
        });
    };
    //--------

    const isFirst = () => {
        return galleryControls.start === 0;
    };
    const isLast = () => {
        console.log(galleryControls.end, elements.length);
        return galleryControls.end + 1 >= elements.length;
    };

    //--------
    const hidePreviousButton = () => {
        setGalleryControls({
            ...galleryControls,
            hideNext: false,
            hidePrev: true,
        });
    };
    const hideNextButton = () => {
        setGalleryControls({
            ...galleryControls,
            hideNext: true,
            hidePrev: false,
        });
    };

    // const changeStartEnd = (start, end, direction) => {
    //     if (direction) {
    //         start += elementsPerPage;
    //         end += elementsPerPage;
    //     } else {
    //         start -= elementsPerPage;
    //         end -= elementsPerPage;
    //     }
    //     let showPrev, showNext;
    //     if (start == 0) {
    //         showPrev = false;
    //     } else {
    //         showPrev = true;
    //     }
    //     // console.log("end: ", end);
    //     if (end >= elements.length) {
    //         showNext = false;
    //     } else {
    //         showNext = true;
    //     }
    //     setGalleryControls({
    //         ...galleryControls,
    //         start,
    //         end,
    //         showPrev,
    //         showNext,
    //     });
    // };

    return (
        <div className="gallery__wrapper flex cc">
            <div className="gallery__controls">
                {/* Prev Button */}
                <button
                    className={
                        galleryControls.hidePrev == false
                            ? "galleryControls"
                            : "galleryControls hideControls"
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        previous();
                    }}
                >
                    <i className="material-icons">arrow_left</i>
                </button>
            </div>
            {/* Gallery */}
            <div className="gallery__elements">
                <ul className="flex frow">
                    {elements.length > 0 && renderElements(elements)}
                </ul>
            </div>
            <div className="gallery__controls">
                {/* Next Button */}
                <button
                    className={
                        galleryControls.hideNext == false
                            ? "galleryControls"
                            : "galleryControls hideControls"
                    }
                    onClick={(event) => {
                        event.stopPropagation();
                        next();
                    }}
                >
                    <i className="material-icons">arrow_right</i>
                </button>
            </div>
        </div>
    );
};
