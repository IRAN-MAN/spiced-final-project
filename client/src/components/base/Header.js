import { Link } from "react-router-dom";

// components
import Logo from "../elements/Logo";

export default function Header() {
    return (
        <header className="flex cc">
            <Link to="/">
                <Logo />
            </Link>
        </header>
    );
}
