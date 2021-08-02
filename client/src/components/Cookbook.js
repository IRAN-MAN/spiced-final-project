import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {
    receiveCoauthors,
    receiveRecipes,
    receiveCurrentCookbook,
    uploadCookbookCover,
} from "../redux/action-creators";

//components
import CoauthorsList from "./CoauthorsList";
import ChapterList from "./ChapterList";
import Button from "./Button";
import AddRecipe from "./AddRecipe";
import InviteCoauthors from "./InviteCoauthors";
import UploadPictureForm from "./forms/UploadPictureForm";

//hooks
import { useToggle } from "../hooks/hooks";

export default function Cookbook(props) {
    const dispatch = useDispatch();
    const cookbook_id = props.match.params.id;
    const coauthors = useSelector((state) => state.coauthors);
    const currentCookbook = useSelector((state) => state.currentCookbook);

    const [toggle, toggleOnOff] = useToggle();
    const [toggle2, toggleOnOff2] = useToggle();

    useEffect(() => {
        console.log("...(COOKBOOK) cookbook_id", cookbook_id);
        dispatch(receiveCurrentCookbook(cookbook_id));
        dispatch(receiveCoauthors(cookbook_id));
        if (cookbook_id != undefined) {
            dispatch(receiveRecipes(cookbook_id));
        }
    }, []);

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
            <UploadPictureForm
                label="change cover"
                action={uploadCookbookCover}
                id={cookbook_id}
            />
            {currentCookbook && (
                <div className="bioContent">
                    <h1>{currentCookbook.cookbook_name}</h1>
                </div>
            )}
            <CoauthorsList coauthors={coauthors} toggleOnOff={toggleOnOff2} />
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
            {toggle2 && (
                <InviteCoauthors toggle={toggle2} toggleOnOff={toggleOnOff2} />
            )}
        </div>
    );
}
