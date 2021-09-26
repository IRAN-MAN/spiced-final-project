//components
import MyCookbooks from "./MyCookbooks";
import UploadPictureForm from "./forms/UploadPictureForm";
import { uploadProfilePic } from "../redux/action-creators";

// hooks
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function MyProfile() {
    const user = useSelector((state) => {
        return state.user;
    });

    useEffect(() => {}, [user]);

    return (
        <div className="profileWrapper flex cc fcolumn">
            <div className="avatarWrapper boxShadowL">
                <img
                    className="avatar owner"
                    src={user.profile_pic}
                    alt={user.first_name + " " + user.last_name}
                />
            </div>
            <UploadPictureForm
                label="add photo"
                action={uploadProfilePic}
                id={user.id}
            />
            <div className="bioContent">
                <h1>{user.first_name + " " + user.last_name}</h1>
                <div>
                    <p>
                        from <span className="bolder">{user.city}</span>
                    </p>
                </div>
            </div>
            <MyCookbooks />
        </div>
    );
}
