import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {
    receiveCoauthors,
    receiveRecipes,
    populateCurrentCookbook,
} from "../redux/action-creators";

//components
import CoauthorsList from "./CoauthorsList";
import ChapterList from "./ChapterList";
import Button from "./Button";
import AddRecipe from "./AddRecipe";

//hooks
import { useToggle } from "../hooks/hooks";

export default function Cookbook(props) {
    const dispatch = useDispatch();
    const cookbook_id = props.match.params.id;
    const [currentCookbook, setCurrentCookbook] = useState({});
    const coauthors = useSelector((state) => state.coauthors);
    const cookbooks = useSelector((state) => state.cookbooks);
    const [toggle, toggleOnOff] = useToggle();

    const currentCB = cookbooks.filter((x) => x.cookbook_id == cookbook_id);

    useEffect(() => {
        if (cookbook_id != undefined) {
            dispatch(receiveRecipes(cookbook_id));
        }
        dispatch(receiveCoauthors(cookbook_id));
    }, []);

    useEffect(() => {
        setCurrentCookbook(currentCB);
        console.log("[currentCookbook]", currentCB);
        dispatch(populateCurrentCookbook(currentCB));
    }, [cookbooks]);
    return (
        <div className="profileWrapper flex cc fcolumn">
            Cookbook Component
            {currentCookbook && (
                <div className="avatarWrapper">
                    <img
                        className="avatar"
                        src={currentCookbook.cover_pic}
                        alt={currentCookbook.cookbook_name}
                    />
                </div>
            )}
            {currentCookbook && (
                <div className="bioContent">
                    <h1>{currentCookbook.cookbook_name}</h1>
                </div>
            )}
            <CoauthorsList coauthors={coauthors} />
            <ChapterList />
            <div className="tooltip tooltipBtn">
                <span className="tooltiptext">Add new Recipe</span>
                <Button
                    onClick={() => toggleOnOff(false)}
                    type="submit"
                    classNames="button addrecipe-button flex cc"
                    icon="post_add"
                />
            </div>
            {toggle && <AddRecipe toggle={toggle} toggleOnOff={toggleOnOff} />}
        </div>
    );
}
