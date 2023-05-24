import React from "react"
import PropTypes from "prop-types"

import style from "./Post.module.css"

export const Post = ({ Title, Body }) => {
    return (
        <div className={style.Post}>
            <input className={style.Input} type="text" placeholder="Título" />

            <input
                className={`${style.Input} ${style.InputBody} `}
                type="text"
                placeholder="Contenido"
            />

            <div className={style.Buttons}>
                <button className={style.Button}>Queja</button>
                <button className={style.Button}>Sugerencia</button>
            </div>
            <div className={style.Send}>
                <button >Enviar</button>
            </div>
        </div>
    )
}

Post.propTypes = {
    /**
     * Title of the post
     */
    Title: PropTypes.string,
    /**
     * Body of the post
     */
    Body: PropTypes.string,
}

Post.defaultProps = {
    Title: "Título",
    Body: "Contenido",
}
