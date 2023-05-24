//funciones
import { Link } from "react-router-dom"

//style
import style from "./View.module.css"

//assets
import logo from "../../assets/logo.png"

const ButtonMenu = ({ icon, text, onClick }) => {
    return (
        <button className={style.buttonMenu} onClick={() => onClick()}>
            <div className={style.buttonMenuContainer}>
                <img className={style.icon} src={icon}></img>
                <div className={style.text}>{text}</div>
            </div>
        </button>
    )
}

function View({ menuOptions, tipo, children }) {
    const classes = tipo
        ? `${style.fondoContainer} ${style[`fondoContainer ${tipo}`]}`
        : style.fondoContainer

    return (
        <div className={style.view}>
            <div className={style.menuView}>
                <div className={style.menuViewContainer}>
                    <img src={logo} className={style.logo}/>
                    {menuOptions.map((opcion, index) => (
                        <Link to={opcion[2]}>
                            <ButtonMenu
                                key={index}
                                icon={opcion[0]}
                                text={opcion[1]}
                                onClick={
                                    opcion[1] 
                                    // === "Cerrar sesión"
                                    //     ? null
                                    //     : null
                                }
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <div className={style.rightSide}>
                {children}
            </div>
        </div>
    )
}

export default View
