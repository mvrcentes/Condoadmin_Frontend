import React from 'react'

import style from './Register.module.css'

export const Register = ({ props }) => {
  return (
    <div className={style.Register}>
        <div className={style.Title}>{props.titulo}</div>
        <div className={style.User}>{props.residente}</div>
        <div className={style.Date}>{props.fecha}</div>
        <div className={style.Upvotes}>{props.upvotes}</div>
    </div>
  )
}
