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
        // console.log(
        //     "...(Gallery) props elements, elementsPerPage: ",
        //     elements,
        //     elementsPerPage
        // );

        let hide = false;
        if (elementsPerPage >= elements.length) {
            console.log(
                "...(Gallery) props elementsPerPage ",
                elementsPerPage,
                elements.length
            );
            hide = true;
        }
        setGalleryControls({
            start: 0,
            end: elementsPerPage,
            hidePrev: true,
            hideNext: hide,
            direction: false,
            length: elements.length,
        });
        // console.log("Gallery: elements: ", elements);
    }, []);

    const renderElements = (elements) => {
        // console.log(
        //     "renderElements start, end",
        //     galleryControls.start,
        //     galleryControls.end
        // );
        return elements
            .slice(galleryControls.start, galleryControls.end)
            .map((element) => {
                return render(element);
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
        if (start == 0) {
            hidePrev = true;
        } else {
            hidePrev = false;
        }
        console.log("...() end, elements.length: ", end, elements.length);
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
        <div className="galleryWrapper flex cc">
            {/* Prev Button */}
            <div>
                <button
                    className={
                        !galleryControls.hidePrev
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
            <div className="gallery flex">
                {elements.length > 0 && renderElements(elements)}
            </div>

            {/* Next Button */}
            <div>
                <button
                    className={
                        !galleryControls.hideNext
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
