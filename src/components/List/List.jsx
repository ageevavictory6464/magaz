import './List.css'

export const List = ({ name, desc, img }) => {
    return (
        <div className="list">
            <img src={`${process.env.PUBLIC_URL}${img}`} alt="side-info" className="list--img" />
            <h5 className="list--title">{name}</h5>
            <p className="list--text">{desc}</p>
        </div>
    )
}