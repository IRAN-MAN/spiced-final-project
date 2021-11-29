import { useDispatch } from "react-redux";
// import { updateProfilePic } from "../actions";

//constants
import { tooltips } from "../constants/constants";

export default function UploadPictureForm({ label, id, action }) {
    const dispatch = useDispatch();
    // console.log(
    //     "...(UploadPictureForm) props:",
    //     props.toggle,
    //     props.toggleOnOff
    // );

    const onPictureUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        await dispatch(action(formData, id));
    };
    return (
        <div
            className="formWrapper flex cc"
            onClick={(event) => event.stopPropagation()}
        >
            <form
                id="uploadForm"
                encType="multipart/form-data"
                action="/api/upload"
                method="POST"
            >
                <label className="button_wrapper" forhtml="file">
                    <input
                        id="file"
                        className="textfield"
                        type="file"
                        accept="image/*"
                        name="file"
                        onChange={() => onPictureUpload(event.target.files[0])}
                        required
                    />
                    <div className="tooltip">
                        <span className="tooltiptext">{label}</span>
                        <span className="flex">
                            <i className="material-icons white">add_a_photo</i>
                        </span>
                    </div>
                </label>
            </form>
        </div>
    );
}
