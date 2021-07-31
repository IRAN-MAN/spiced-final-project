import { Link } from "react-router-dom";
import {
    receiveCurrentRecipe,
    receiveIngredientslist,
    receiveAuthorInfo,
} from "../redux/action-creators";

//hooks
import { useToggle } from "../hooks/hooks";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Gallery from "./Gallery";
import Button from "./Button";
import AddRecipe from "./AddRecipe";

export default function Recipe(props) {
    const recipe_id = props.match.params.id;

    //need to think about this:
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const recipePhotos = useSelector((state) => state.photos);
    const author = useSelector((state) => state.author);
    const dispatch = useDispatch();
    const [toggle, toggleOnOff] = useToggle();

    useEffect(() => {
        console.log("...(Recipe EFFECT) recipe_id: ", recipe_id);
        if (recipe_id) {
            dispatch(receiveCurrentRecipe(recipe_id));
            dispatch(receiveIngredientslist(recipe_id));
        }
    }, []);
    useEffect(() => {
        if (currentRecipe.owner_id) {
            dispatch(receiveAuthorInfo(currentRecipe.owner_id));
        }
    }, [currentRecipe]);

    return (
        <div className="recipeWrapper flex cc fcolumn">
            Recipe Component
            <div className="avatarWrapper">
                <img
                    className="avatar"
                    src={currentRecipe.recipe_photo}
                    alt={currentRecipe.recipe_name}
                />
            </div>
            <div className="bioContent">
                <h1>{currentRecipe.recipe_name}</h1>
                <div className="recipeStory">
                    <q>
                        <span className="bolder">
                            {currentRecipe.recipe_story}
                        </span>
                    </q>
                </div>
                <div className="recipeDetails">
                    <p className="ingredients">
                        <span className="bolder">Prep time: </span>60min //{" "}
                        <span className="bolder">Difficulty</span> Easy
                    </p>
                </div>
                <div className="ingredientsWrapper">
                    <p className="ingredients">
                        <span className="bolder">Ingredients:</span>INSERT
                        INGREDIENTS HERE!
                    </p>
                </div>
                <div className="instructionsWrapper">
                    <div className="instructions">
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation
                            ullamcorper suscipit lobortis nisl ut aliquip ex ea
                            commodo consequat. Duis autem vel eum iriure dolor
                            in hendrerit in vulputate velit esse molestie
                            consequat, vel illum dolore eu feugiat nulla
                            facilisis at vero eros et accumsan et iusto odio
                            dignissim qui blandit praesent luptatum zzril
                            delenit augue duis dolore te feugait nulla facilisi.
                            Nam liber tempor cum soluta nobis eleifend option
                            congue nihil imperdiet doming id quod mazim placerat
                            facer possim assum.Lorem ipsum dolor sit amet,
                            consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam
                            erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation ullamcorper suscipit lobortis
                            nisl ut aliquip ex ea commodo consequat. Duis autem
                            vel eum iriure dolor in hendrerit in vulputate velit
                            esse molestie consequat, vel illum dolore eu feugiat
                            nulla facilisis at vero eros et accumsan et iusto
                            odio dignissim qui blandit praesent luptatum zzril
                            delenit augue duis dolore te feugait nulla facilisi.
                            Nam liber tempor cum soluta nobis eleifend option
                            congue nihil imperdiet doming id quod mazim placerat
                            facer possim assum.
                        </p>
                    </div>
                </div>
                <div className="madeByWrapper flex cc ">
                    <div className="miniAvatarWrapper flex vcenter">
                        <img
                            className="avatar smallAvatar"
                            src={author.profile_pic}
                            alt={author.first_name + " " + author.last_name}
                        />
                    </div>
                    <div>
                        <Link to="/userprofile/:id">
                            <p>
                                Made with love by{" "}
                                <span className="bolder">
                                    {author.first_name + " " + author.last_name}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>

                <Button
                    onClick={() => toggleOnOff(false)}
                    labeltext="edit recipe"
                    type="submit"
                    classNames="button edit-button"
                    icon="edit"
                />
                {toggle && (
                    <AddRecipe toggle={toggle} toggleOnOff={toggleOnOff} />
                )}
            </div>
        </div>
    );
}
