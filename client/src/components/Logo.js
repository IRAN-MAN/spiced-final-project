const LOGO_URL = "https://via.placeholder.com/300x100";
const LOGO_URL_SMALL = "https://via.placeholder.com/100";

export default function Logo() {
    return (
        <picture className="logo">
            <source media="(min-width: 768px)" srcSet={LOGO_URL} />
            <source media="(min-width: 480px)" srcSet={LOGO_URL_SMALL} />
            <img className="logo" src="" alt="" />
        </picture>
    );
}