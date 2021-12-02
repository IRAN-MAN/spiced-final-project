import axios from "../../../axios";

// //components
import Button from "../../elements/Button";

//constants
import {
    acceptInvite,
    buttonLabels,
    inputLabels,
    inputPlaceholders,
} from "../../constants/constants";

// hooks
import { useState, useEffect } from "react";
import { useStatefulFields, useAuthSubmit } from "../../../hooks/hooks";

export default function AcceptInvite(props) {
    const cookbook_id = props.cookbook_id;
    const [cookbook, setCookbook] = useState({});
    const [inputValues, handleChange] = useStatefulFields();
    const [submit, error] = useAuthSubmit(
        `/api/co_authors/invite/login/${cookbook_id}`,
        inputValues
    );

    // const cookbook_id = props.match.params.id;
    // console.log("...(ACCEPTINVITATION) cookbook_id: ", cookbook_id);

    const getCookbook = async (cookbook_id) => {
        const cookbookInfo = await axios.get(
            `/api/cookbooks/by_id/${cookbook_id}`
        );
        // console.log(
        //     "...(ACTION receiveCurrentCookbook) cookbook:",
        //     cookbookInfo.data
        // );
        return cookbookInfo;
    };

    useEffect(async () => {
        const cookbook = await getCookbook(cookbook_id);
        setCookbook(cookbook.data);
        // console.log("THE COOKBOOK:", cookbook.data);
    }, []);

    return (
        <div className="wrapper__auth flex cc fcolumn boxShadowS">
            <h1>{acceptInvite.heading}</h1>
            <p>{acceptInvite.subline}</p>
            <div className="avatar__wrapper">
                <img
                    className="avatar"
                    src={cookbook.cover_pic}
                    alt={cookbook.cookbook_name}
                />
            </div>

            <div className="bioContent">
                <h1>{cookbook.cookbook_name}</h1>
                <p>
                    {acceptInvite.by}
                    {cookbook.author_first_name +
                        " " +
                        cookbook.author_last_name}
                </p>
            </div>

            <div className="wrapper__form">
                <form onSubmit={submit} className="flex">
                    <label htmlFor="email">
                        {inputLabels.email}
                        <input
                            id="email"
                            type="text"
                            name="email"
                            placeholder={inputPlaceholders.email}
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="password">
                        {inputLabels.password}
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder={inputPlaceholders.password}
                            required
                            onChange={handleChange}
                        />
                    </label>
                    <Button
                        labeltext={buttonLabels.joinCookbook}
                        type="submit"
                        classNames="button button__submit"
                        icon="send"
                    />
                    <p className="message">{error}</p>
                </form>
            </div>
        </div>
    );
}
