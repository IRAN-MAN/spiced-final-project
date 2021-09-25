import { Link } from "react-router-dom";
import {
    receiveCurrentRecipe,
    receiveIngredientslist,
    receiveAuthorInfo,
    receiveRecipePhotos,
    toggleLightboxVisible,
    uploadRecipePhoto,
} from "../redux/action-creators";

// constants
const DEFAULT_COVER = "/images/default_photo.jpeg";

//components
import Lightbox from "./Lightbox";
import Button from "./Button";
import EditRecipe from "./forms/EditRecipe";
import IngredientsList from "./IngredientsList";
import UploadPictureForm from "./forms/UploadPictureForm";
// import FavouriteButton from "./FavouriteButton";

//hooks
import { useToggle } from "../hooks/hooks";
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
            string += "⭑";
        }
        return <i>{string}</i>;
    };

    return (
        <div className="profileWrapper flex cc fcolumn">
            <div className="avatarWrapper">
                <img
                    className="avatar"
                    src={currentRecipe.recipe_photo || DEFAULT_COVER}
                    alt={currentRecipe.recipe_name}
                    onClick={toggleLightbox}
                />
            </div>
            <UploadPictureForm
                label="add photo"
                action={uploadRecipePhoto}
                id={currentRecipe.recipe_id}
            />
            {/* <FavouriteButton recipe_id={currentRecipe.recipe_id} /> */}
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
                <div className="tooltip tooltipBtn flex jcc vcenter">
                    <span className="tooltiptext">Edit Recipe</span>
                    <Button
                        onClick={() => toggleOnOff(false)}
                        type="submit"
                        classNames="button addrecipe-button flex cc"
                        icon="edit"
                    />
                </div>

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
