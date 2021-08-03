// import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";

import { Link } from "react-router-dom";
import { useState } from "react";

//components
// import Button from "../Button";

export default function InvitationForm() {
    // const [inputValues, handleChange] = useStatefulFields();
    // const [submit, error] = useAuthSubmit("/api/users/login", inputValues);
    const [inviteLink, setInviteLink] = useState(
        "http://localhost:3000/api/co_authors/community/invite/1"
    );

    return (
        <div className="formWrapper">
            InvitationForm
            <div className="flex fcolumn">
                <h1>Invite your Friends &amp; Family</h1>
                <p>to join your cookbook</p>

                <div className="invitationWrapper flex fcolumn">
                    <p>Simply share this invitation with them:</p>
                    <label className="buttonWrapper">
                        <div
                            className="invitationLink flex frow cc"
                            onClick={() => {
                                console.log("CLICK!", inviteLink);
                                navigator.clipboard.writeText(inviteLink);
                            }}
                        >
                            <q>
                                click to copy:
                                http://www.whatscooking-goodlooking.com/invite
                            </q>
                            <button />
                            <div className="tooltip">
                                <span className="tooltiptext">
                                    copy to clipboard
                                </span>
                                <span className="flex">
                                    <i className="material-icons white">
                                        content_copy
                                    </i>
                                </span>
                            </div>

                            {/* content_copy */}
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
