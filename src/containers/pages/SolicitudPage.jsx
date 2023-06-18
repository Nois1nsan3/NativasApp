import { FormularioSolicitud } from '../../components/FormularioSolicitud.jsx'

export function SolicitudPage () {
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
