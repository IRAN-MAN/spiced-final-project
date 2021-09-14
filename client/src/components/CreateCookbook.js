// components
import CookbookForm from "./forms/CookbookForm";

export default function CreateCookbook(props) {
    const { toggleOnOff } = props;

    return (
        <section className="backdrop">
            <button
                className="closeBackdropButton"
                onClick={() => toggleOnOff(true)}
            >
                ×
            </button>
            <CookbookForm toggleOnOff={toggleOnOff} />
        </section>
    );
}
