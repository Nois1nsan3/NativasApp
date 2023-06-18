import { useState } from 'react'
import { db } from '../firebase'

export function FormularioSolicitud ({ handleSolicitud }) {
  const [contacto, setContacto] = useState('')
  const [explicacion, setExplicacion] = useState('')

  const handleContactoChange = (e) => {
    setContacto(e.target.value)
  }

  const handleExplicacionChange = (e) => {
    setExplicacion(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const fechaNacimiento = new Date('1990-01-01')
    const hoy = new Date()
    const edad = Math.floor((hoy - fechaNacimiento) / (365.25 * 24 * 60 * 60 * 1000))
    if (edad < 18) {
      console.log('Debes ser mayor de edad para postular.')
      return
    }

    const solicitud = {
      contacto,
      explicacion
    }

    db.collection('solicitudes')
      .add(solicitud)
      .then(() => {
        console.log('Solicitud enviada correctamente')
        setContacto('')
        setExplicacion('')
        handleSolicitud(contacto, explicacion)
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error)
        console.log('Ocurrió un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.')
      })
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center'>
      <div className='bg-gray-100 p-4 rounded-md'>
        <input
          type='tel'
          value={contacto}
          onChange={handleContactoChange}
          className='mb-2'
          placeholder='Contacto (número de teléfono)'
          required
        />
        <textarea
          value={explicacion}
          onChange={handleExplicacionChange}
          className='mb-2'
          placeholder='Explique por qué desea ser parte del equipo'
          required
        />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Enviar solicitud
        </button>
      </div>
    </form>
  )
}
