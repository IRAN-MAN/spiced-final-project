import { Link } from "react-router-dom";

// components
import Logo from "./Logo";

export default function Header() {
    return (
        <header>
            <p>Header Component</p>
            <Link to="/">
                <Logo />
            </Link>
        </header>
    );
}
