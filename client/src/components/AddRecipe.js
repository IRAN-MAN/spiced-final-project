//components
import RecipeForm from "./forms/RecipeForm";
import FadeIn from "./FadeIn";

export default function AddRecipe(props) {
    const { toggleOnOff } = props;

    return (
        <section className="backdrop">
            <FadeIn delay={250} duration={850}>
                <button
                    className="closeBackdropButton"
                    onClick={() => toggleOnOff(true)}
                >
                    ×
                </button>
                <RecipeForm toggleOnOff={toggleOnOff} />
            </FadeIn>
        </section>
    );
}
