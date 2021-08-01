import { Link } from "react-router-dom";
import {
    receiveCurrentRecipe,
    receiveIngredientslist,
    receiveAuthorInfo,
    receiveRecipePhotos,
    toggleLightboxVisible,
} from "../redux/action-creators";

//hooks
import { useToggle } from "../hooks/hooks";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//components
import Lightbox from "./Lightbox";
import Button from "./Button";
import AddRecipe from "./AddRecipe";
import IngredientsList from "./IngredientsList";

export default function Recipe(props) {
    const recipe_id = props.match.params.id;

    const currentRecipe = useSelector((state) => state.currentRecipe);
    const recipePhotos = useSelector((state) => state.recipePhotos);
    const author = useSelector((state) => state.author);
    const ingredients_list = useSelector((state) => state.ingredients_list);
    const isLightboxVisible = useSelector((state) => state.isLightboxVisible);

    const dispatch = useDispatch();
    const [toggle, toggleOnOff] = useToggle();

    useEffect(() => {
        if (recipe_id) {
            dispatch(receiveCurrentRecipe(recipe_id));
            dispatch(receiveIngredientslist(recipe_id));
            dispatch(receiveRecipePhotos(currentRecipe.recipe_id));
        }
    }, []);
    useEffect(() => {
        if (currentRecipe.owner_id) {
            dispatch(receiveAuthorInfo(currentRecipe.owner_id));
        }
    }, [currentRecipe]);

    const toggleLightbox = () => {
        console.log(
            "...(Recipe toggleLightbox) isLightboxVisible: ",
            isLightboxVisible
        );
        dispatch(toggleLightboxVisible(isLightboxVisible));
    };
    const renderDifficulty = (difficulty) => {
        let string = "";
        for (var i = 0; i < difficulty; i++) {
            string += "⭑";
        }
        return <i>{string}</i>;
    };

    return (
        <div className="recipeWrapper flex cc fcolumn">
            Recipe Component
            <div className="avatarWrapper">
                <img
                    className="avatar"
                    src={currentRecipe.recipe_photo}
                    alt={currentRecipe.recipe_name}
                    onClick={toggleLightbox}
                />
            </div>
            <div className="recipeMain">
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
                        <span className="bolder">Prep time: </span>
                        {currentRecipe.prep_time}
                        {" ••• "}
                        <span className="bolder">Difficulty: </span>
                        {renderDifficulty(currentRecipe.difficulty_level)}
                    </p>
                </div>
                <IngredientsList ingredients_list={ingredients_list} />
                <div className="instructionsWrapper">
                    <div className="instructions">
                        <p>{currentRecipe.instructions}</p>
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
                    type="submit"
                    classNames="button addrecipe-button flex cc"
                    icon="edit"
                />
                {toggle && (
                    <AddRecipe toggle={toggle} toggleOnOff={toggleOnOff} />
                )}
                {isLightboxVisible && (
                    // && recipePhotos
                    <Lightbox
                        elements={recipePhotos}
                        toggleLightbox={toggleLightbox}
                    />
                )}
            </div>
        </div>
    );
}
