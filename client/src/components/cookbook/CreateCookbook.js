// components
import CookbookForm from "../forms/cookbook/CookbookForm";
import Backdrop from "../elements/Backdrop";

export default function CreateCookbook(props) {
    const { toggleOnOff } = props;

    return (
        <Backdrop toggleOnOff={toggleOnOff}>
            <CookbookForm toggleOnOff={toggleOnOff} />
        </Backdrop>
    );
}
