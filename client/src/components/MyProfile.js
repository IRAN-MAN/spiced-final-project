import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function MyProfile() {
    const user = useSelector((state) => {
        return state.user;
    });

    const dispatch = useDispatch();
    useEffect(() => {}, []);
    useEffect(() => {}, [user]);

    const userTEST = {
        first_name: "Sascha",
        last_name: "Salamander",
        profile_pic: "../images/testprofile.jpg",
        city: "Tokyo",
    };

    return (
        <div className="profileWrapper flex cc fcolumn">
            MyProfile Component
            <div className="avatarWrapper">
                <img
                    className="avatar"
                    src={userTEST.profile_pic}
                    alt={userTEST.first_name + " " + userTEST.last_name}
                />
            </div>
            <div className="bioContent">
                <h1>{userTEST.first_name + " " + userTEST.last_name}</h1>
                <div>
                    <p>
                        from <span className="bolder">{userTEST.city}</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
