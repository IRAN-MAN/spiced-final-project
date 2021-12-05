export default function FormWrapper({ heading, subline, children }) {
    return (
        <div>
            <h2>{heading}</h2>
            <p>{subline}</p>
            {children}
        </div>
    );
}
