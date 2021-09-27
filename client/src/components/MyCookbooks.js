import { Link } from "react-router-dom";

// components
import Gallery from "./Gallery";
import CreateCookbook from "./CreateCookbook";
import Button from "./Button";

// hooks
import { useSelector } from "react-redux";
import { useToggle, useCurrentWidth } from "../hooks/hooks";

export default function MyCookbooks() {
    const cookbooks = useSelector((state) => {
        return state.cookbooks;
    });

    const [toggle, toggleOnOff] = useToggle();
    let windowWidth = useCurrentWidth();

    const renderCookbooks = (cookbook) => {
        return (
            <div className="" key={cookbook.cookbook_id}>
                <li key={cookbook.cookbook_id} className="cookbookWrapper">
                    <Link to={"/cookbook/" + cookbook.cookbook_id}>
                        <div className="coverWrapper boxShadowL">
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
            <h2>My Cookbooks</h2>
            <p>{windowWidth}</p>
            <ul className="flex jcc ">
                {windowWidth > 768 && (
                    <Gallery
                        elements={cookbooks}
                        elementsPerPage={4}
                        render={renderCookbooks}
                    />
                )}
                {windowWidth <= 768 && (
                    <Gallery
                        elements={cookbooks}
                        elementsPerPage={2}
                        render={renderCookbooks}
                    />
                )}
            </ul>
            <div className="tooltip tooltipBtn">
                <span className="tooltiptext">Create Cookbook</span>
                <Button
                    onClick={() => toggleOnOff(false)}
                    type="Create CookBook"
                    classNames="button addrecipe-button flex cc boxShadowL"
                    icon="menu_book"
                />
            </div>
            {toggle && (
                <CreateCookbook toggle={toggle} toggleOnOff={toggleOnOff} />
            )}
        </div>
    );
}
