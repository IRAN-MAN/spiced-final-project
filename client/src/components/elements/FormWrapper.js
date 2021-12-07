export default function FormWrapper({ heading, subline, children }) {
    return (
        <div className="flex fcolumn cc">
            {heading && <h2>{heading}</h2>}
            {subline && <p>{subline}</p>}
            {children}
        </div>
    );
}
