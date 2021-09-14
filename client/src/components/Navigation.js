import { Link } from "react-router-dom";

// components
import Logout from "./Logout";

export default function Navigation() {
    return (
        <div className="navWrapper">
            <nav>
                <ul className="nav-ul flex vcenter">
                    <li>
                        <Link to="/">My Cookbooks</Link>
                    </li>
                    <li>
                        <Link to="/editProfile">Edit Profile</Link>
                    </li>
                    <li>
                        <Logout />
                    </li>
                </ul>
            </nav>
        </div>
    );
}
