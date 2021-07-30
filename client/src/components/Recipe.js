import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { receiveCurrentRecipe } from "../redux/action-creators";

//components
import Gallery from "./Gallery";

export default function Recipe(props) {
    const recipe_id = props.match.params.id;

    //need to think about this:
    const currentRecipe = useSelector((state) => state.currentRecipe);
    const recipePhotos = useSelector((state) => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("...(Recipe EFFECT) recipe_id: ", recipe_id);
        if (recipe_id) {
            dispatch(receiveCurrentRecipe(recipe_id));
        }
    }, []);

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
                <div>
                    <p>
                        <span className="bolder">
                            {currentRecipe.recipe_story}
                        </span>
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
            </div>
        </div>
    );
}
