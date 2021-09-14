//components
import InvitationForm from "./forms/InvitationForm";

export default function InviteCoauthors(props) {
    const { toggleOnOff } = props;

    return (
        <section className="backdrop">
            InviteCoauthors Component
            <button
                className="closeBackdropButton"
                onClick={() => toggleOnOff(true)}
            >
                ×
            </button>
            <InvitationForm />
        </section>
    );
}
