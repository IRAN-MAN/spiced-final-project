// import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";
import { useState } from "react";
import { useSelector } from "react-redux";

//components
// import Button from "../Button";
import { Tooltip } from "../../helpers/tooltip";

//constants
import { tooltips, invitation, urls } from "../../constants/constants";
import { icons } from "../../constants/icons";

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
        <div className="wrapper__form">
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
                            <div className="flex frow cc">
                                <Tooltip label={tooltips.copyClipboard}>
                                    <span className="flex">
                                        <i className="material-icons white">
                                            {icons["content_copy"]}
                                        </i>
                                    </span>
                                </Tooltip>
                                <Tooltip label={tooltips.shareFB}>
                                    <span className="flex">
                                        <i className="material-icons white">
                                            {icons["facebook"]}
                                        </i>
                                    </span>
                                </Tooltip>
                                <Tooltip label={tooltips.shareWhatsapp}>
                                    <span className="flex">
                                        <i className="material-icons white">
                                            {icons["whatsapp"]}
                                        </i>
                                    </span>
                                </Tooltip>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
}
