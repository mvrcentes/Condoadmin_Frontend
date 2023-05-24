import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import style from "./Card.module.css"

export const Card = ({ children, to }) => {
    return (
        <>
            {to ? (
                <Link
                    to={'/admin/' + to}
                    style={{ textDecoration: "none" }}
                    className={style.HouseCard}>
                    {children}
                </Link>
            ) : (
                <div className={style.HouseCard}>{children}</div>
            )}
        </>
    )
}

Card.propTypes = {
    data: PropTypes.shape({
        code: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
    }),
}
