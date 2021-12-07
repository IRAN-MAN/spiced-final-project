const InfoTile = ({ icon, labeltext }) => {
    return (
        <span className="info__tile flex jcc">
            <span>{labeltext}</span>
            {icon && <span className="material-icons">{icon}</span>}
        </span>
    );
};

export default InfoTile;
