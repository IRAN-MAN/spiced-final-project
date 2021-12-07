//components
import RecipeForm from "./RecipeForm";
import Backdrop from "../../elements/Backdrop";

export default function AddRecipe(props) {
    const { toggleOnOff } = props;

    return (
        <Backdrop toggleOnOff={toggleOnOff}>
            <RecipeForm toggleOnOff={toggleOnOff} />
        </Backdrop>
    );
}
