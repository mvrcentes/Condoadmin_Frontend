import MiniCard from "../MiniCard/MiniCard"
import React from 'react'
import "./CardForm.css"

const CardForm = ({ onChange, arrayDatosInput, titulo }) => {

    //PENDIENTE HACER UN MAP SOBRE UN ARRAY DE OBJETOS PARA RELLENAR LOS INPUT DE LAS CASAS

    return (
      <div className="card-form" data-testid="card-form">
          <div className="title"> {titulo} </div>
          {arrayDatosInput.map((arrayDatos, index) => (
              <MiniCard key={index} title={arrayDatos.title} className="MiniCard">
                  <input
                      type={arrayDatos.type}
                      name={arrayDatos.name}
                      placeholder={arrayDatos.placeholder}
                      className="input-form"
                      onChange={onChange}
                  />
              </MiniCard>
          ))}
      </div>
  )
}

export default CardForm
