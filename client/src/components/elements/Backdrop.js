//components
import FadeIn from "../helpers/FadeIn";

export default function Backdrop({ toggleOnOff, children }) {
    return (
        <section className="backdrop">
            <FadeIn delay={250} duration={450}>
                <button
                    className="button__closeBackdrop"
                    onClick={() => toggleOnOff(true)}
                >
                    ×
                </button>
                {children}
            </FadeIn>
        </section>
    );
}
