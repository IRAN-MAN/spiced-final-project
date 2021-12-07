import { Link } from "react-router-dom";
import {
    receiveCurrentRecipe,
    receiveIngredientslist,
    receiveAuthorInfo,
    receiveRecipePhotos,
    toggleLightboxVisible,
    uploadRecipePhoto,
} from "../../../../redux/action-creators";

// constants
const DEFAULT_COVER = "/images/default_photo.jpeg";
import { recipe, tooltips, difficulty } from "../../../constants/constants";
import { icons } from "../../../constants/icons";

//components
import Lightbox from "../../../elements/Lightbox";
import Button from "../../../elements/Button";
import EditRecipe from "../../../forms/recipe/EditRecipe";
import IngredientsList from "./IngredientsList";
import UploadPictureForm from "../../../forms/UploadPictureForm";
// import FavouriteButton from "./FavouriteButton";
import { Tooltip } from "../../../helpers/tooltip";
import InfoTile from "../../../elements/infoTile";

//hooks
import { useToggle } from "../../../../hooks/hooks";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Recipe(props) {
    const recipe_id = props.match.params.id;

    const currentRecipe = useSelector((state) => state.currentRecipe);
    const recipePhotos = useSelector((state) => state.recipePhotos);
    const author = useSelector((state) => state.author);
    const ingredients_list = useSelector((state) => state.currentIngredients);
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
    // const renderDifficulty = (difficulty) => {
    //     let string = "";
    //     for (var i = 0; i < difficulty; i++) {
    //         string += `${recipe.difficultyIndicator}`;
    //     }
    //     return <i>{string}</i>;
    // };

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
            <div className="recipe__main">
                <h1>{currentRecipe.recipe_name}</h1>

                <div className="recipe__story">
                    <q>{currentRecipe.recipe_story} </q>
                </div>
                <div className="wrapper__info flex jcc">
                    <InfoTile
                        icon={icons.timer}
                        labeltext={currentRecipe.prep_time + recipe.minutes}
                    ></InfoTile>
                    <InfoTile
                        icon={icons.difficulty}
                        labeltext={difficulty[currentRecipe.difficulty_level]}
                    ></InfoTile>
                </div>

                <div className="wrapper__ingredients boxShadowS">
                    <IngredientsList ingredients={ingredients_list} />
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
