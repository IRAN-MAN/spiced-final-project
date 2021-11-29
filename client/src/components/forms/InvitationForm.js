// import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";
import { useState } from "react";
import { useSelector } from "react-redux";

//components
// import Button from "../Button";

//constants
import { tooltips, invitation, urls } from "../constants/constants";

export default function InvitationForm() {
    // const [inputValues, handleChange] = useStatefulFields();
    // const [submit, error] = useAuthSubmit("/api/users/login", inputValues);
    const cookbook_id = useSelector(
        (state) => state.currentCookbook.cookbook_id
    );

    const [inviteLink, setInviteLink] = useState(
        `${urls.inviteLink}${cookbook_id}`
    );

    return (
        <div className="formWrapper">
            <div className="flex fcolumn">
                <h1>{invitation.heading}</h1>
                <p>{invitation.subline}</p>

                <div className="invitationWrapper flex fcolumn boxShadowS">
                    <p className="bolder">{invitation.callToShare}</p>
                    <label className="button__wrapper">
                        <div
                            className="invitationLink flex fcolumn cc"
                            onClick={() => {
                                navigator.clipboard.writeText(inviteLink);
                            }}
                        >
                            <q>{invitation.inviteCode + cookbook_id}</q>
                            <button />
                            <div className=" flex frow cc">
                                <div className="tooltip">
                                    <span className="tooltiptext">
                                        {tooltips.copyClipboard}
                                    </span>
                                    <span className="flex">
                                        <i className="material-icons white">
                                            content_copy
                                        </i>
                                    </span>
                                </div>
                                <div className="tooltip">
                                    <span className="tooltiptext">
                                        {tooltips.shareFB}
                                    </span>
                                    <span className="flex">
                                        <i className="material-icons white">
                                            facebook
                                        </i>
                                    </span>
                                </div>
                                <div className="tooltip">
                                    <span className="tooltiptext">
                                        {tooltips.shareWhatsapp}
                                    </span>
                                    <span className="flex">
                                        <i className="material-icons white">
                                            whatsapp
                                        </i>
                                    </span>
                                </div>
                            </div>
                            {/* content_copy */}
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
