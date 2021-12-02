import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPotato, removePotato, receivePotatoCount } from "../actions";

export default function FavouriteButton(props) {
    const potatocount = useSelector((state) => state.potatocount);
    const currentRecipe = useSelector((state) => state.currentRecipe);

    const dispatch = useDispatch();
    const potatoCount = useSelector((state) => state.potatoCount);
    const potatoButtonState = useSelector((state) => state.potatoButtonState);
    const onPotatoClick = () => {
        if (potatoButtonState) {
            dispatch(addPotato(currentRecipe.recipe_id));
        } else {
            dispatch(removePotato(currentRecipe.recipe_id));
        }
    };

    useEffect(() => {
        dispatch(receivePotatoCount(currentRecipe.recipe_id));
        dispatch(receivePotatoButtonState(props.user_id));
    }, []);
    return (
        <div className="buttonsWrapper">
            <button
                onClick={onPotatoClick}
                type="submit"
                className="button potatoButton btnPadding"
            >
                <span className="flex">
                    <i className="material-icons white">whatshot</i>
                    <span>{potatoCount}</span>
                    <span className="hideLabel">
                        {potatoCount == 1 ? `Hot Potato` : `Hot Potatoes`}
                    </span>
                </span>
            </button>
        </div>
    );
}
