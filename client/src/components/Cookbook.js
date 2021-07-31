import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
    receiveCoauthors,
    receiveRecipes,
    storeCurrentCookbook,
} from "../redux/action-creators";

//components
import CoauthorsList from "./CoauthorsList";
import ChapterList from "./ChapterList";

export default function Cookbook(props) {
    const dispatch = useDispatch();
    const cookbook_id = props.match.params.id;
    const [currentCookbook, setCurrentCookbook] = useState({});
    const coauthors = useSelector((state) => state.coauthors);
    const cookbooks = useSelector((state) => state.cookbooks);

    useEffect(() => {
        if (cookbook_id != undefined) {
            dispatch(receiveRecipes(cookbook_id));
        }
        dispatch(receiveCoauthors(cookbook_id));
    }, []);
    useEffect(() => {
        setCurrentCookbook(cookbooks[cookbook_id]);
    }, [cookbooks]);
    const currentCookbookTEST = {
        cookbook_name: "Pasta Dreams",
        author: "Sally Salamander",
        cover_pic:
            "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80",
    };
    // const chaptersTEST = ["Starters", "Main", "Desert"];

    return (
        <div className="profileWrapper flex cc fcolumn">
            Cookbook Component
            {currentCookbook && (
                <div className="avatarWrapper">
                    <img
                        className="avatar"
                        src={currentCookbook.cover_pic}
                        alt={currentCookbook.cookbook_name}
                    />
                </div>
            )}
            {currentCookbook && (
                <div className="bioContent">
                    <h1>{currentCookbook.cookbook_name}</h1>
                </div>
            )}
            <CoauthorsList coauthors={coauthors} />
            <ChapterList />
        </div>
    );
}
