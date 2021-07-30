import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { receiveCookbooks } from "../redux/action-creators";
import { Link } from "react-router-dom";

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
        dispatch(receiveCookbooks(user.id));
    }, [cookbooks]);

    const cookbooksTEST = [
        {
            id: 1,
            cookbook_name: "Name",
            cover_pic:
                "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        },
        {
            id: 2,
            cookbook_name: "Name2",
            cover_pic:
                "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        },
        {
            id: 3,
            cookbook_name: "Name3",
            cover_pic:
                "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
        },
    ];

    const renderCookbooks = (cookbook) => {
        return (
            <li key={cookbook.id} className="cookbookWrapper">
                <Link to={"/cookbook/" + cookbook.id}>
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
        );
    };

    return (
        <div className="cookbooksWrapper flex cc fcolumn">
            MyCookbooks Component
            {/* <ul>{cookbooksTEST.length > 0 && renderCookbooks()}</ul> */}
            <ul>
                <Gallery
                    elements={cookbooksTEST}
                    elementsPerPage={1}
                    render={renderCookbooks}
                />
            </ul>
        </div>
    );
}
