import React from 'react'

import style from './Register.module.css'
import { Link } from "react-router-dom"


export const Register = ({ props, to }) => {
  return (
    <>
      {to ? (
        <Link
          to={'/admin/' + to}
          style={{ textDecoration: "none" }}
          className={style.HouseCard}>
          <div className={style.Register}>
            <div className={style.Title}>{props.titulo}</div>
            <div className={style.User}>{props.residente}</div>
            <div className={style.Date}>{props.fecha}</div>
            <div className={style.Upvotes}>{props.upvotes}</div>
          </div>
        </Link>
      ) : (
        <div className={style.Register}>
          <div className={style.Title}>{props.titulo}</div>
          <div className={style.User}>{props.residente}</div>
          <div className={style.Date}>{props.fecha}</div>
          <div className={style.Upvotes}>{props.upvotes}</div>
        </div>
      )}
    </>



  )
}
