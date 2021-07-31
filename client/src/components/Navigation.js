import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navWrapper">
            Nav Component
            <nav>
                <ul className="nav-ul flex vcenter">
                    <li>
                        <Link to="/">My Cookbooks</Link>
                    </li>
                    <li>
                        <Link to="/editProfile">Edit Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
