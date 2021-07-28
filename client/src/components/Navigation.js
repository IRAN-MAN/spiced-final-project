import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <div className="navWrapper">
            <nav>
                <ul className="nav-ul flex vcenter">
                    <li>
                        <Link to="/">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/">Page 2</Link>
                    </li>
                    <li>
                        <Link to="/">Page 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
