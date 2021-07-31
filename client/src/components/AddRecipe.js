// hooks
// import { useDispatch } from "react-redux";
// import { useToggle } from "../hooks/hooks";

import UploadPictureForm from "./forms/UploadPictureForm";

export default function AddRecipe(props) {
    // const [toggle, toggleOnOff] = useToggle();
    const { toggle, toggleOnOff } = props;

    return (
        <section className="backdrop">
            AddRecipe Component
            <button className="closeButton" onClick={() => toggleOnOff(true)}>
                ×
            </button>
            <div className="">
                <UploadPictureForm />
            </div>
        </section>
    );
}
