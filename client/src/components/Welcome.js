//components
import Login from "./Login";
import Registration from "./Registration";

export default function Welcome() {
    return (
        <div>
            Welcome Component
            <Registration />
            <Login />
        </div>
    );
}
