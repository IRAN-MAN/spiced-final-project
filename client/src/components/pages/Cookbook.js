import {
    receiveCoauthors,
    receiveRecipes,
    receiveCurrentCookbook,
    uploadCookbookCover,
    receiveCookbooks,
} from "../../redux/action-creators.ts";

//components
import CoauthorsList from "../users/CoauthorsList";
import ChapterList from "../cookbook/chapter/ChapterList";
import Button from "../elements/Button";
import AddRecipe from "../forms/recipe/AddRecipe";
import InviteCoauthors from "../users/InviteCoauthors";
import UploadPictureForm from "../forms/UploadPictureForm";
import FadeIn from "../helpers/FadeIn";
import { Tooltip } from "../helpers/tooltip";

//constants
import { tooltips } from "../constants/constants";

//hooks
import { useToggle } from "../../hooks/hooks";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Cookbook(props) {
    const dispatch = useDispatch();
    const cookbook_id = props.match.params.id;
    const coauthors = useSelector((state) => state.coauthors);
    const currentCookbook = useSelector((state) => state.currentCookbook);
    const user = useSelector((state) => state.user);
    const [toggle, toggleOnOff] = useToggle();
    const [toggle2, toggleOnOff2] = useToggle();

    useEffect(() => {
        // console.log("...(COOKBOOK) cookbook_id", cookbook_id);
        dispatch(receiveCurrentCookbook(cookbook_id));
        dispatch(receiveCoauthors(cookbook_id));
        if (cookbook_id != undefined) {
            dispatch(receiveRecipes(cookbook_id));
        }
    }, []);

    useEffect(() => {
        // console.log("[cookbook: useEffect: user]", user);
        if (user.id) {
            dispatch(receiveCookbooks(user.id));
        }
    }, [currentCookbook]);

    return (
        <div className="profileWrapper flex cc fcolumn">
            {currentCookbook && (
                <div className="avatar__wrapper boxShadowL">
                    <img
                        className="avatar"
                        src={currentCookbook.cover_pic}
                        alt={currentCookbook.cookbook_name}
                    />
                </div>
            )}

            <UploadPictureForm
                label={tooltips.changeCover}
                action={uploadCookbookCover}
                id={cookbook_id}
            />
            {currentCookbook && (
                <div className="bioContent">
                    <h1>{currentCookbook.cookbook_name}</h1>
                </div>
            )}
            <FadeIn delay={250} duration={850}>
                <CoauthorsList
                    user={user}
                    coauthors={coauthors}
                    toggleOnOff={toggleOnOff2}
                />

                <ChapterList />
            </FadeIn>
            <Tooltip label={tooltips.addRecipe} className={"tooltipBtn"}>
                <Button
                    onClick={() => toggleOnOff(false)}
                    type="submit"
                    classNames="button button__addRecipe flex cc boxShadowL"
                    icon="post_add"
                />
            </Tooltip>
            {toggle && <AddRecipe toggle={toggle} toggleOnOff={toggleOnOff} />}
            {toggle2 && (
                <InviteCoauthors toggle={toggle2} toggleOnOff={toggleOnOff2} />
            )}
        </div>
    );
}
