import axios from "../axios";

export default function Logout() {
    const onClickHandler = async () => {
        await axios.post("/api/users/logout");
        window.location = "/";
    };

    return (
        <div className="logout">
            <button className="logout-btn" onClick={onClickHandler}>
                Logout
            </button>
        </div>
    );
}
