import { useEffect, useState } from "react";

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

    useEffect(async () => {
        // console.log(
        //     "...(Gallery) props elements.length, elementsPerPage: ",
        //     elements.length,
        //     elementsPerPage
        // );
        // let hide = false;
        // // console.log("...(Gallery) props elementsPerPage --- Length");
        // if (galleryControls.end >= elements.length) {
        //     hide = true;
        // }
        // setGalleryControls({
        //     ...galleryControls,
        //     start: 0,
        //     end: elementsPerPage,
        //     length: elements.length,
        // });
        // console.log("Gallery: controls: ", galleryControls);
    }, []);

    const renderElements = (elements) => {
        // console.log(
        //     "...( Gallery renderElements) elementsPerPage elements.length,: ",
        //     elementsPerPage,
        //     elements.length
        // );

        // console.log("...( Gallery renderElements) controls: ", galleryControls);
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
        let showPrev, showNext;
        if (start == 0) {
            showPrev = false;
        } else {
            showPrev = true;
        }
        // console.log("...() end, elements.length: ", end, elements.length);
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
                        // console.log(
                        //     "...(CLICK PREV) galleryControls: ",
                        //     galleryControls
                        // );
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
                        // console.log(
                        //     "...(CLICK NEXT) galleryControls: ",
                        //     galleryControls
                        // );
                    }}
                >
                    <i className="material-icons">arrow_right</i>
                </button>
            </div>
        </div>
    );
}
