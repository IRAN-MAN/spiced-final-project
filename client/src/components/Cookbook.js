import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { receiveCurrentCookbook, receiveRecipes } from "../redux/actions";

export default function Cookbook(props) {
    const dispatch = useDispatch();
    const cookbook_id = props.match.params.id;
    // const currentCookbook = useSelector((state) => {
    //     return state.currentCookbook;
    // });
    const currentCookbook = useSelector(
        (state) => state.cookbooks[cookbook_id]
    );
    const chapters = useSelector((state) => {
        return state.chapters;
    });

    useEffect(async () => {
        dispatch(receiveCurrentCookbook(cookbook_id));
        dispatch(receiveRecipes(cookbook_id));
    }, []);

    // useEffect(async () => {
    //     await dispatch(receiveCurrentCookbook(cookbook_id));
    // }, [currentCookbook]);

    const currentCookbookTEST = {
        cookbook_name: "Pasta Dreams",
        author: "Sally Salamander",
        cover_pic:
            "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    };

    return (
        <div className="profileWrapper flex cc fcolumn">
            Cookbook Component
            <div className="avatarWrapper">
                <img
                    className="avatar"
                    src={currentCookbookTEST.cover_pic}
                    alt={currentCookbookTEST.cookbook_name}
                />
            </div>
            <div className="bioContent">
                <h1>{currentCookbookTEST.cookbook_name}</h1>
                <div>
                    <p>
                        <span className="bolder">
                            {currentCookbookTEST.story}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
