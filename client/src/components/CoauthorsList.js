import { Link } from "react-router-dom";

export default function CoauthorsList(props) {
    console.log("...(CoauhtorsList) coauthors: ", props.coauthors);
    const renderCoauthors = () => {
        return props.coauthors.map((coauthor) => {
            return (
                <li key={coauthor.id} className="coauthorWrapper">
                    <Link to={"/users/profile/" + coauthor.id}>
                        <div className="miniAvatarWrapper">
                            <img
                                className="avatar smallAvatar"
                                src={coauthor.profile_pic}
                                alt={
                                    coauthor.first_name +
                                    " from " +
                                    coauthor.city
                                }
                            />
                            <button className="tooltip">
                                <span className="tooltiptext">
                                    {coauthor.first_name}
                                </span>
                            </button>
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
            </ul>
        </div>
    );
}
