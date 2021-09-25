// import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";

import { useState } from "react";
import { useSelector } from "react-redux";

//components
// import Button from "../Button";

export default function InvitationForm() {
    // const [inputValues, handleChange] = useStatefulFields();
    // const [submit, error] = useAuthSubmit("/api/users/login", inputValues);
    const cookbook_id = useSelector(
        (state) => state.currentCookbook.cookbook_id
    );

    const [inviteLink, setInviteLink] = useState(
        `http://localhost:3000/api/co_authors/community/invite/${cookbook_id}`
    );

    return (
        <div className="formWrapper">
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
                                http://www.whatscooking-goodlooking.com/
                                {cookbook_id}
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
