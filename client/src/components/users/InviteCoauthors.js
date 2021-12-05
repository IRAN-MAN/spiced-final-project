//components
import Backdrop from "../elements/Backdrop";
import InvitationForm from "../forms/invitation/InvitationForm";

export default function InviteCoauthors(props) {
    const { toggleOnOff } = props;

    return (
        <Backdrop toggleOnOff={toggleOnOff}>
            <InvitationForm />
        </Backdrop>
    );
}
