//components
import AcceptInviteForm from "./forms/AcceptInviteForm";

export default function AcceptInvite(props) {
    const cookbook_id = props.match.params.id;

    return (
        <div className="flex authWrapper">
            <AcceptInviteForm cookbook_id={cookbook_id} />
        </div>
    );
}
