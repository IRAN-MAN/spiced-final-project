//components
import RecipeForm from "./forms/RecipeForm";

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
            <RecipeForm toggleOnOff={toggleOnOff} />
        </section>
    );
}
