import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { receiveCookbooks } from "../redux/actions";

export default function MyCookbooks() {
    const user = useSelector((state) => {
        return state.user;
    });
    const cookbooks = useSelector((state) => {
        return state.cookbooks;
    });

    const dispatch = useDispatch();
    useEffect(() => {}, []);
    useEffect(() => {
        dispatch(receiveCookbooks(user.id));
    }, [cookbooks]);

    const userTEST = {
        first_name: "Sascha",
        last_name: "Salamander",
        profile_pic: "../images/testprofile.jpg",
        city: "Tokyo",
    };

    const renderCookbooks = () => {
        return cookbooks.map((cookbook) => {
            return (
                <li key={cookbook.id} className="cookbookWrapper">
                    <div className="coverWrapper">
                        <img
                            className="cover"
                            src={cookbook.cover_pic}
                            alt={cookbook.cookbook_name}
                        />
                    </div>
                </li>
            );
        });
    };

    return (
        <div className="cookbooksWrapper flex cc fcolumn">
            MyCookbooks Component
            <ul>{cookbooks.length > 0 && renderCookbooks()}</ul>
        </div>
    );
}
