import { Link } from "react-router-dom";

//constants
import { tooltips } from "./constants/constants";

export default function CoauthorsList(props) {
    console.log("...(CoauhtorsList) coauthors: ", props.coauthors);
    const user = props.user;

    const renderOwner = (coauthor) => {
        return (
            <li key={coauthor.coauthor_id} className="coauthorWrapper">
                <Link to={"/users/profile/" + user.id}>
                    <div className="avatar__wrapper-mini">
                        <div className="tooltip">
                            <span className="tooltiptext">
                                {tooltips.cookbookOwner}
                            </span>
                            <img
                                className="avatar smallAvatar owner boxShadowS"
                                src={coauthor.profile_pic}
                                alt={
                                    coauthor.first_name +
                                    " from " +
                                    coauthor.city
                                }
                            />
                        </div>
                    </div>
                </Link>
            </li>
        );
    };

    const renderCoauthors = () => {
        return props.coauthors.map((coauthor) => {
            if (coauthor.user_id == user.id) {
                return renderOwner(coauthor);
            }
            return (
                <li key={coauthor.coauthor_id} className="coauthorWrapper">
                    <Link to={"/users/profile/" + coauthor.id}>
                        <div className="avatar__wrapper-mini">
                            <div className="tooltip">
                                <span className="tooltiptext">
                                    {coauthor.first_name}
                                </span>
                                <img
                                    className="avatar smallAvatar boxShadowS"
                                    src={coauthor.profile_pic}
                                    alt={
                                        coauthor.first_name +
                                        " from " +
                                        coauthor.city
                                    }
                                />
                            </div>
                        </div>
                    </Link>
                </li>
            );
        });
    };

    return (
        <div className="coauthorsListWrapper">
            <ul className="flex jcc vcenter frow">
                {props.coauthors.length > 0 && renderCoauthors()}
                <li className="coauthorWrapper">
                    <div className="avatar__wrapper-mini">
                        <label>
                            <button
                                onClick={() => {
                                    props.toggleOnOff(false);
                                }}
                            ></button>
                            <div className="pointer tooltip">
                                <span className="tooltiptext">
                                    {tooltips.addCoauthor}
                                </span>
                                <span className="flex">
                                    <i className="material-icons white">
                                        add_circle_outline
                                    </i>
                                </span>
                            </div>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    );
}
