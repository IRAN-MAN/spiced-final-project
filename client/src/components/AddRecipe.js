//components
import RecipeForm from "./forms/RecipeForm";
import UploadPictureForm from "./forms/UploadPictureForm";

export default function AddRecipe(props) {
    const { toggleOnOff } = props;

    return (
        <section className="backdrop">
            <button
                className="closeBackdropButton"
                onClick={() => toggleOnOff(true)}
            >
                ×
            </button>
            {/* <UploadPictureForm /> */}
            <RecipeForm />
        </section>
    );
}
