import React from 'react'
import { FormularioSolicitud } from './FormularioSolicitud'

const SolicitudPage = () => {
  const handleSolicitud = (contacto, explicacion) => {
    console.log('Solicitud recibida:', contacto, explicacion)
  }

  return (
    <div>
      <h1>Formulario de Solicitud</h1>
      <FormularioSolicitud handleSolicitud={handleSolicitud} />
    </div>
  )
}

export default SolicitudPage
