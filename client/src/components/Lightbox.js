import Gallery from "./Gallery";

export default function Lightbox(elements, toggleLightbox) {
    const renderPhoto = (image) => {
        return (
            <div className="lightboxImageWrapper">
                <img src={image.url} alt={image.id} />
            </div>
        );
    };

    return (
        <div className="lightboxWrapper" onClick={toggleLightbox}>
            <button className="closeButton" onClick={toggleLightbox}>
                ×
            </button>
            <Gallery elements={render()} elementsPerPage={1} render={render} />
        </div>
    );
}
