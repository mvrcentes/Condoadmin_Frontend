//funciones
import { Link } from "react-router-dom"

//style
import style from "./View.module.css"

//assets
import logo from "../../assets/logo.png"

const ButtonMenu = ({ icon, text, fn }) => {
  return (
      <button className={style.buttonMenu} onClick={fn}>
          <div className={style.buttonMenuContainer}>
              <img className={style.icon} src={icon}></img>
              <div className={`${style.text} ${style.menuOptionText}`}>{text}</div>
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
                                fn={
                                    opcion[3]
                                    
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
