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
            <h1>Create Cook Book</h1>
            <CookbookForm toggleOnOff={toggleOnOff} />
        </section>
    );
}
