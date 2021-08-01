import { useStatefulFields } from "../hooks/hooks";
import CookbookForm from "./forms/CookbookForm";

export default function CreateCookbook(props) {
    const { toggleOnOff } = props;
    const [inputValues, handleChange] = useStatefulFields();

    return (
        <section className="backdrop">
            <button
                className="closeBackdropButton"
                onClick={() => toggleOnOff(true)}
            >
                X
            </button>
            <div>Create Cook Book</div>
            <CookbookForm />
        </section>
    );
}
