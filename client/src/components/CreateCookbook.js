// components
import CookbookForm from "./forms/CookbookForm";
import FadeIn from "./FadeIn";

export default function CreateCookbook(props) {
    const { toggleOnOff } = props;

    return (
        <section className="backdrop">
            <FadeIn delay={250} duration={450}>
                <button
                    className="button__closeBackdrop"
                    onClick={() => toggleOnOff(true)}
                >
                    ×
                </button>
                <CookbookForm toggleOnOff={toggleOnOff} />
            </FadeIn>
        </section>
    );
}
