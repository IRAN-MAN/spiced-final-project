import { instance as axios } from "../../axios.ts";

export default function Logout() {
    const onClickHandler = async () => {
        await axios.post("/api/users/logout");
        window.location = "/";
    };

    return (
        <div className="logout">
            <button className="button__logout" onClick={onClickHandler}>
                Logout
            </button>
        </div>
    );
}
