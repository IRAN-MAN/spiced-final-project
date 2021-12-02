import { Link } from "react-router-dom";

// components
import { Gallery } from "../elements/Gallery";
import CreateCookbook from "./CreateCookbook";
import Button from "../elements/Button";
import { Tooltip } from "../helpers/tooltip";

//constants
import { tooltips, userProfile } from "../constants/constants";

// hooks
import { useSelector } from "react-redux";
import { useToggle, useCurrentWidth } from "../../hooks/hooks";

export default function MyCookbooks() {
    const cookbooks = useSelector((state) => {
        return state.cookbooks;
    });

    const [toggle, toggleOnOff] = useToggle();
    let windowWidth = useCurrentWidth();

    const renderCookbooks = (cookbook) => {
        return (
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
        );
    };

    return (
        <div className="cookbooksWrapper flex cc fcolumn">
            <h2>{userProfile.myCookbooks}</h2>
            {/* <p>{windowWidth}</p> */}
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
            <Tooltip label={tooltips.newCookbook} className={"tooltipBtn"}>
                <Button
                    onClick={() => toggleOnOff(false)}
                    type="Create CookBook"
                    classNames="button button__addRecipe flex cc boxShadowL"
                    icon="menu_book"
                />
            </Tooltip>
            {toggle && (
                <CreateCookbook toggle={toggle} toggleOnOff={toggleOnOff} />
            )}
        </div>
    );
}
