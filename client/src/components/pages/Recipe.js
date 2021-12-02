import { Link } from "react-router-dom";
import {
    receiveCurrentRecipe,
    receiveIngredientslist,
    receiveAuthorInfo,
    receiveRecipePhotos,
    toggleLightboxVisible,
    uploadRecipePhoto,
} from "../../redux/action-creators";

// constants
const DEFAULT_COVER = "/images/default_photo.jpeg";
import { recipe, tooltips } from "../constants/constants";

//components
import Lightbox from "../elements/Lightbox";
import Button from "../elements/Button";
import EditRecipe from "../forms/recipe/EditRecipe";
import IngredientsList from "../cookbook/chapter/recipe/IngredientsList";
import UploadPictureForm from "../forms/UploadPictureForm";
// import FavouriteButton from "./FavouriteButton";
import { Tooltip } from "../helpers/tooltip";

//hooks
import { useToggle } from "../../hooks/hooks";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
            dispatch(receiveRecipePhotos(recipe_id));
        }
    }, []);
    useEffect(() => {
        dispatch(receiveRecipePhotos(recipe_id));
        if (currentRecipe.owner_id) {
            dispatch(receiveAuthorInfo(currentRecipe.owner_id));
        }
    }, [currentRecipe]);

    const toggleLightbox = () => {
        // console.log(
        //     "...(Recipe toggleLightbox) isLightboxVisible: ",
        //     isLightboxVisible
        // );
        dispatch(toggleLightboxVisible(isLightboxVisible));
    };
    const renderDifficulty = (difficulty) => {
        let string = "";
        for (var i = 0; i < difficulty; i++) {
            string += `${recipe.difficultyIndicator}`;
        }
        return <i>{string}</i>;
    };

    return (
        <div className="profileWrapper flex cc fcolumn">
            <div className="avatar__wrapper">
                <img
                    className="avatar boxShadowL"
                    src={currentRecipe.recipe_photo || DEFAULT_COVER}
                    alt={currentRecipe.recipe_name}
                    onClick={toggleLightbox}
                />
            </div>
            <UploadPictureForm
                label={tooltips.addPhoto}
                action={uploadRecipePhoto}
                id={currentRecipe.recipe_id}
            />
            {/* <FavouriteButton recipe_id={currentRecipe.recipe_id} /> */}
            <div className="recipeMain">
                <h1>{currentRecipe.recipe_name}</h1>
                <div className="recipeStory">
                    <q>{currentRecipe.recipe_story} </q>
                </div>
                <div className="ingredientsWrapper boxShadowS">
                    <p className="recipeDetails">
                        <span className="bolder">
                            {recipe.preparation + recipe.colon}
                        </span>
                        {currentRecipe.prep_time + recipe.minutes}
                        {recipe.separator}
                        <span className="bolder">
                            {recipe.difficulty + recipe.colon}
                        </span>
                        {renderDifficulty(currentRecipe.difficulty_level)}
                    </p>

                    <IngredientsList ingredients_list={ingredients_list} />
                </div>
                <div className="instructionsWrapper boxShadowS">
                    <div className="instructions">
                        <p>{currentRecipe.instructions}</p>
                    </div>
                </div>
                <div className="madeByWrapper flex cc ">
                    <div className="avatar__wrapper-mini flex vcenter">
                        <img
                            className="avatar boxShadowS"
                            src={author.profile_pic}
                            alt={author.first_name + " " + author.last_name}
                        />
                    </div>
                    <div>
                        <Link to="/userprofile/:id">
                            <p>
                                {recipe.madeWithLove}
                                <span className="bolder">
                                    {author.first_name + " " + author.last_name}
                                </span>
                            </p>
                        </Link>
                    </div>
                </div>
                <Tooltip label={tooltips.editRecipe} className={"tooltipBtn"}>
                    <Button
                        onClick={() => toggleOnOff(false)}
                        type="submit"
                        classNames="button button__addRecipe flex cc boxShadowL"
                        icon="edit"
                    />
                </Tooltip>

                {toggle && (
                    <EditRecipe toggle={toggle} toggleOnOff={toggleOnOff} />
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
