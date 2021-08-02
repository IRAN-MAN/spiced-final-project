import { Link } from "react-router-dom";

export default function CoauthorsList(props) {
    console.log("...(CoauhtorsList) coauthors: ", props.coauthors);
    const renderCoauthors = () => {
        return props.coauthors.map((coauthor) => {
            return (
                <li key={coauthor.coauthor_id} className="coauthorWrapper">
                    <Link to={"/users/profile/" + coauthor.id}>
                        <div className="miniAvatarWrapper">
                            <div className="tooltip">
                                <span className="tooltiptext">
                                    {coauthor.first_name}
                                </span>
                                <img
                                    className="avatar smallAvatar"
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
            CoauthorsList Component
            <ul className="flex jcc frow">
                {props.coauthors.length > 0 && renderCoauthors()}
                <li>
                    <label className="buttonWrapper">
                        <button
                            onClick={() => {
                                console.log("CLICK!");
                                props.toggleOnOff(false);
                            }}
                        ></button>
                        <div className="tooltip">
                            <span className="tooltiptext">add coauthors</span>
                            <span className="flex">
                                <i className="material-icons white">
                                    add_circle_outline
                                </i>
                            </span>
                        </div>
                    </label>
                </li>
            </ul>
        </div>
    );
}
