import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { receiveCookbooks, receiveUserInfo } from "../redux/action-creators";
import { Link } from "react-router-dom";
import { cookbooksTEST } from "./TESTDATA";
import Button from "./Button";

import { useToggle } from "../hooks/hooks";
//components
import Gallery from "./Gallery";
import CreateCookbook from "./CreateCookbook";

export default function MyCookbooks() {
    const user = useSelector((state) => {
        return state.user;
    });
    const cookbooks = useSelector((state) => {
        return state.cookbooks;
    });

    const [toggle, toggleOnOff] = useToggle();
    const dispatch = useDispatch();
    useEffect(() => {}, []);

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
            {/* <ul>{cookbooks.length > 0 && renderCookbooks()}</ul> */}
            <h2>My cookbooks</h2>
            <ul className="flex jcc ">
                <Gallery
                    elements={cookbooks}
                    elementsPerPage={4}
                    render={renderCookbooks}
                />
            </ul>
            <div className="tooltip tooltipBtn">
                <span className="tooltiptext">Create Cookbook</span>
                <Button
                    onClick={() => toggleOnOff(false)}
                    type="Create CookBook"
                    classNames="button addrecipe-button flex cc"
                    icon="menu_book"
                />
            </div>
            {toggle && (
                <CreateCookbook toggle={toggle} toggleOnOff={toggleOnOff} />
            )}
        </div>
    );
}
