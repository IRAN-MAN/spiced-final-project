const LOGO_URL = "/images/logo.png";
const LOGO_URL_SMALL = "/images/logosmall.png";

export default function Logo() {
    return (
        <picture className="logo">
            <source media="(min-width: 768px)" srcSet={LOGO_URL} />
            <source media="(min-width: 480px)" srcSet={LOGO_URL_SMALL} />
            <img className="logo" src={LOGO_URL_SMALL} alt="LOGO" />
        </picture>
    );
}
