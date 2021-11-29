//components
import FadeIn from "./FadeIn";
import InvitationForm from "./forms/InvitationForm";

export default function InviteCoauthors(props) {
    const { toggleOnOff } = props;

    return (
        <FadeIn delay={250} duration={450}>
            <section className="backdrop">
                <button
                    className="button__closeBackdrop"
                    onClick={() => toggleOnOff(true)}
                >
                    ×
                </button>
                <InvitationForm />
            </section>
        </FadeIn>
    );
}
