import { useDispatch } from "react-redux";
// import { updateProfilePic } from "../actions";

//components
import { Tooltip } from "../helpers/tooltip";

//constants
// import { tooltips } from "../constants/constants";
import { icons } from "../constants/icons";

export default function UploadPictureForm({ label, id, action }) {
    const dispatch = useDispatch();
    const onPictureUpload = async (file) => {
        const formData = new FormData();
        formData.append("file", file);
        await dispatch(action(formData, id));
    };
    return (
        <div
            className="wrapper__form flex cc"
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
                    <Tooltip label={label}>
                        <span className="flex">
                            <i className="material-icons white">
                                {icons["add_a_photo"]}
                            </i>
                        </span>
                    </Tooltip>
                </label>
            </form>
        </div>
    );
}
