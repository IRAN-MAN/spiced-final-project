import axios from "../../axios";

// //components
import Button from "../Button";

// hooks
import { useState, useEffect } from "react";
import { useStatefulFields, useAuthSubmit } from "../../hooks/hooks";

export default function AcceptInvite(props) {
    const cookbook_id = props.cookbook_id;
    const [cookbook, setCookbook] = useState({});
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit(
        `/api/coauthors/invite/login/${cookbook_id}`,
        inputValues
    );

    // const cookbook_id = props.match.params.id;
    console.log("...(ACCEPTINVITATION) cookbook_id: ", cookbook_id);

    const getCookbook = async (cookbook_id) => {
        const cookbookInfo = await axios.get(
            `/api/cookbooks/by_id/${cookbook_id}`
        );
        console.log(
            "...(ACTION receiveCurrentCookbook) cookbook:",
            cookbookInfo.data
        );
        return cookbookInfo;
    };

    useEffect(async () => {
        const cookbook = await getCookbook(cookbook_id);
        setCookbook(cookbook.data);
        console.log("THE COOKBOOK:", cookbook.data);
    }, []);

    return (
        <div className="authWrapper flex cc fcolumn">
            <h1>Hej Good-Looking!</h1>
            <p>Accept Invitation to join a community cookbook:</p>
            <div className="avatarWrapper">
                <img
                    className="avatar"
                    src={cookbook.cover_pic}
                    alt={cookbook.cookbook_name}
                />
            </div>

            <div className="bioContent">
                <h1>{cookbook.cookbook_name}</h1>
                <p>
                    by{" "}
                    {cookbook.author_first_name +
                        " " +
                        cookbook.author_last_name}
                </p>
            </div>

            <div className="formWrapper">
                <form onSubmit={submit} className="flex">
                    <label htmlFor="email">
                        Email
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder="email"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="******"
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <Button
                        labeltext="join cookbook"
                        type="submit"
                        classNames="button submit-button"
                        icon="send"
                    />
                    <p className="message">{error}</p>
                </form>
            </div>
        </div>
    );
}
