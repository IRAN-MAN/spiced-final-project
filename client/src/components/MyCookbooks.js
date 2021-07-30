import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { receiveCookbooks, receiveUserInfo } from "../redux/action-creators";
import { Link } from "react-router-dom";
import { cookbooksTEST } from "./TESTDATA";

//components
import Gallery from "./Gallery";

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
        console.log("...(BEFORE user: ", user);

        if (user.id) {
            console.log("...(AFTER user: ", user);
            dispatch(receiveCookbooks(user.id));
        }
    }, [user]);

    const renderCookbooks = (cookbook) => {
        return (
            <div className="" key={cookbook.cookbook_id}>
                <li key={cookbook.cookbook_id} className="cookbookWrapper">
                    <Link to={"/cookbook/" + cookbook.cookbook_id}>
                        <div className="coverWrapper">
                            <img
                                className="cover"
                                src={cookbook.cover_pic}
                                alt={cookbook.cookbook_name}
                            />
                        </div>
                        <p>{cookbook.cookbook_name}</p>
                    </Link>
                </li>
            </div>
        );
    };

    return (
        <div className="cookbooksWrapper flex cc fcolumn">
            MyCookbooks Component
            {/* <ul>{cookbooks.length > 0 && renderCookbooks()}</ul> */}
            <ul>
                <Gallery
                    elements={cookbooks}
                    elementsPerPage={2}
                    render={renderCookbooks}
                />
            </ul>
        </div>
    );
}
