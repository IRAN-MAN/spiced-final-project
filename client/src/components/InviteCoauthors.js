//components
import RecipeForm from "./forms/RecipeForm";
import UploadPictureForm from "./forms/UploadPictureForm";
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
            {/* <UploadPictureForm /> */}
            {/* <RecipeForm /> */}
            <InvitationForm />
        </section>
    );
}
