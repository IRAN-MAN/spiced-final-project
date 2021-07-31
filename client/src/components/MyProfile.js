import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//components
import MyCookbooks from "./MyCookbooks";

export default function MyProfile() {
    const user = useSelector((state) => {
        return state.user;
    });

    const dispatch = useDispatch();
    useEffect(() => {}, []);
    useEffect(() => {}, [user]);

    return (
        <div className="profileWrapper flex cc fcolumn">
            MyProfile Component
            <div className="avatarWrapper">
                <img
                    className="avatar"
                    src={user.profile_pic}
                    alt={user.first_name + " " + user.last_name}
                />
            </div>
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
