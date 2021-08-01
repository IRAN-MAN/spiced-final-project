import Gallery from "./Gallery";

export default function Lightbox({ elements, toggleLightbox }) {
    const renderPhoto = (image) => {
        return (
            <div className="lightboxImageWrapper">
                <img src={image.url} alt={image.id} />
            </div>
        );
    };

    return (
        <div className="lightboxWrapper">
            LIGHTBOX
            <button className="closeBackdropButton" onClick={toggleLightbox}>
                ×
            </button>
            {/* <Gallery
                elements={elements}
                elementsPerPage={1}
                render={renderPhoto}
            /> */}
        </div>
    );
}
