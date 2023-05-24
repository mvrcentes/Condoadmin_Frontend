import React from 'react'

import style from './Register.module.css'

export const Register = ({ props }) => {
  return (
    <div className={style.Register}>
        <div className={style.Title}>{props.Title}</div>
        <div className={style.User}>{props.User}</div>
        <div className={style.Date}>{props.Date}</div>
        <div className={style.Upvotes}>{props.Upvotes}</div>
    </div>
  )
}
