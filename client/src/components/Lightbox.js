import Gallery from "./Gallery";

export default function Lightbox({ elements, toggleLightbox }) {
    const renderPhoto = (image) => {
        console.log("...(LIGHTBOX renderphoto) image: ", image);
        return (
            <div
                key={image.photo_id}
                className="lightboxImageWrapper flex jcc vcenter"
            >
                <img
                    src={image.recipe_photo}
                    alt={image.photo_id}
                    onClick={(event) => event.stopPropagation()}
                />
            </div>
        );
    };

    return (
        <div className="lightboxWrapper flex fcolumn" onClick={toggleLightbox}>
            <button className="closeBackdropButton" onClick={toggleLightbox}>
                {"×"}
            </button>
            <Gallery
                elements={elements}
                elementsPerPage={1}
                render={renderPhoto}
            />
        </div>
    );
}
