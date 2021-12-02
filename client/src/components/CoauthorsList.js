import { Link } from "react-router-dom";

//constants
import { tooltips } from "./constants/constants";
import { icons } from "./constants/icons";

//components
import { Tooltip } from "./helpers/tooltip";

export default function CoauthorsList(props) {
    // console.log("...(CoauhtorsList) coauthors: ", props.coauthors);
    const user = props.user;

    const renderOwner = (coauthor) => {
        return (
            <li key={coauthor.coauthor_id} className="coauthorWrapper">
                <Link to={"/users/profile/" + user.id}>
                    <div className="avatar__wrapper-mini">
                        <Tooltip label={tooltips.cookbookOwner}>
                            <img
                                className="avatar owner boxShadowS"
                                src={coauthor.profile_pic}
                                alt={
                                    coauthor.first_name +
                                    " from " +
                                    coauthor.city
                                }
                            />
                        </Tooltip>
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
                            <Tooltip label={coauthor.first_name}>
                                <img
                                    className="avatar boxShadowS"
                                    src={coauthor.profile_pic}
                                    alt={
                                        coauthor.first_name +
                                        " from " +
                                        coauthor.city
                                    }
                                />
                            </Tooltip>
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
                            <Tooltip label={tooltips.addCoauthor}>
                                <span className="flex">
                                    <i className="material-icons white">
                                        {icons.add_circle_outline}
                                    </i>
                                </span>
                            </Tooltip>
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    );
}
