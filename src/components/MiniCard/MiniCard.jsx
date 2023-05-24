import "./MiniCard.css"

const MiniCard = ({ title, children }) => {
    return (
        <div className="mini-card-info-card">
            <div className="mini-card-title">{title}</div>
            <div>{children}</div>
        </div>
    )
}

export default MiniCard