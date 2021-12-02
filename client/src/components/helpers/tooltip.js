export const Tooltip = ({ label, children, className }) => {
    return (
        <div className={"pointer tooltip " + (className ? className : "")}>
            <span className="tooltiptext">{label}</span>
            {children}
        </div>
    );
};
