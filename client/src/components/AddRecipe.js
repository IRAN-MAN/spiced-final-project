// hooks
// import { useDispatch } from "react-redux";
// import { useToggle } from "../hooks/hooks";

import UploadPictureForm from "./forms/UploadPictureForm";

export default function AddRecipe(props) {
    // const [toggle, toggleOnOff] = useToggle();
    const { toggle, toggleOnOff } = props;

    return (
        <section className="backdrop" onClick={() => toggleOnOff(true)}>
            <button
                className="closeBackdropButton"
                onClick={() => toggleOnOff(true)}
            >
                ×
            </button>
            <UploadPictureForm />
        </section>
    );
}
