import { useState, useEffect } from "react";

export const Gallery = ({ elements, render, elementsPerPage }) => {
    const allPages = Math.ceil(elements.length / elementsPerPage);
    const [galleryParams, setGalleryParams] = useState({
        start: 0,
        end: elementsPerPage,
        pages: Math.ceil(elements.length / elementsPerPage),
        currentPage: 1,
    });

    const [nextPrevButtons, setNextPrevButtons] = useState({
        hidePrev: galleryParams.currentPage === 1,
        hideNext: galleryParams.currentPage >= allPages,
    });
    useEffect(() => {
        setGalleryParams({
            start: 0,
            end: elementsPerPage,
            pages: Math.ceil(elements.length / elementsPerPage),
            currentPage: 1,
        });
    }, [elements]);

    useEffect(() => {
        console.log("First/Last: ", nextPrevButtons, elements.length);
        if (elements.length !== 0) {
            if (isFirst()) {
                if (isLast()) {
                    setNextPrevButtons({
                        hideNext: true,
                        hidePrev: true,
                    });
                    return;
                }
                setNextPrevButtons({
                    hideNext: false,
                    hidePrev: true,
                });
                return;
            }
            if (isLast()) {
                setNextPrevButtons({
                    hideNext: true,
                    hidePrev: false,
                });
                return;
            }
            setNextPrevButtons({
                hideNext: false,
                hidePrev: false,
            });
        }
    }, [galleryParams.currentPage, elements.length]);

    const mapAndRenderElements = (elements) => {
        return elements
            .slice(galleryParams.start, galleryParams.end)
            .map((element, id) => {
                return render(element, id);
            });
    };

    //-------
    const previous = () => {
        loadPreviousElements();
    };
    const next = () => {
        loadNextElements();
    };
    //--------
    const loadPreviousElements = () => {
        setGalleryParams({
            ...galleryParams,
            start: galleryParams.start - elementsPerPage,
            end: galleryParams.end - elementsPerPage,
            currentPage: galleryParams.currentPage - 1,
        });
    };
    const loadNextElements = () => {
        setGalleryParams({
            ...galleryParams,
            start: galleryParams.start + elementsPerPage,
            end: galleryParams.end + elementsPerPage,
            currentPage: galleryParams.currentPage + 1,
        });
    };
    //--------
    const isFirst = () => {
        return galleryParams.currentPage === 1;
    };
    const isLast = () => {
        return galleryParams.currentPage >= allPages;
    };

    return (
        <div className="gallery__wrapper flex cc">
            <div className="gallery__controls">
                {/* Prev Button */}
                {nextPrevButtons.hidePrev !== true && (
                    <button className={"galleryControls"} onClick={previous}>
                        <i className="material-icons">arrow_left</i>
                    </button>
                )}
            </div>
            {/* Gallery */}
            <div className="gallery__elements">
                <ul className="flex frow">
                    {elements.length > 0 && mapAndRenderElements(elements)}
                </ul>
            </div>
            <div className="gallery__controls">
                {/* Next Button */}
                {nextPrevButtons.hideNext !== true && (
                    <button className={"galleryControls"} onClick={next}>
                        <i className="material-icons">arrow_right</i>
                    </button>
                )}
            </div>
        </div>
    );
};
