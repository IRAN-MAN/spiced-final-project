export default function Button({ onClick, labeltext, type, classNames, icon }) {
    return (
        <div className="buttonWrapper">
            <button onClick={onClick} type={type} className={classNames}>
                <span className="flex">
                    {labeltext}
                    {icon && <i className="material-icons">{icon}</i>}
                </span>
            </button>
        </div>
    );
}
