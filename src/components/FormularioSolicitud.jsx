import { useState } from 'react'
import { db } from '../firebase'

export function FormularioSolicitud ({ handleSolicitud }) {
  const [contacto, setContacto] = useState('')
  const [explicacion, setExplicacion] = useState('')
  const [esMayorDeEdad, setEsMayorDeEdad] = useState(false)
  const [diaNacimiento, setDiaNacimiento] = useState('')
  const [mesNacimiento, setMesNacimiento] = useState('')
  const [anioNacimiento, setAnioNacimiento] = useState('')

  const handleContactoChange = (e) => {
    setContacto(e.target.value)
  }

  const handleExplicacionChange = (e) => {
    setExplicacion(e.target.value)
  }

  const handleEsMayorDeEdadChange = (e) => {
    setEsMayorDeEdad(e.target.checked)
  }

  const handleDiaNacimientoChange = (e) => {
    setDiaNacimiento(e.target.value)
  }

  const handleMesNacimientoChange = (e) => {
    setMesNacimiento(e.target.value)
  }

  const handleAnioNacimientoChange = (e) => {
    setAnioNacimiento(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!esMayorDeEdad) {
      console.log('Debes ser mayor de edad para postular.')
      return
    }

    const fechaNacimiento = new Date(`${anioNacimiento}-${mesNacimiento}-${diaNacimiento}`)
    const hoy = new Date()
    const edad = Math.floor((hoy - fechaNacimiento) / (365.25 * 24 * 60 * 60 * 1000))
    if (isNaN(fechaNacimiento) || edad < 18) {
      console.log('Debes ingresar una fecha de nacimiento válida y ser mayor de edad para postular.')
      return
    }

    const solicitud = {
      contacto,
      explicacion,
      fechaNacimiento: fechaNacimiento.toISOString()
    }

    db.collection('solicitudes')
      .add(solicitud)
      .then(() => {
        console.log('Solicitud enviada correctamente')
        setContacto('')
        setExplicacion('')
        setDiaNacimiento('')
        setMesNacimiento('')
        setAnioNacimiento('')
        handleSolicitud(contacto, explicacion)
      })
      .catch((error) => {
        console.error('Error al enviar la solicitud:', error)
        console.log(
          'Ocurrió un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.'
        )
      })
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center'>
      <div className='bg-gray-100 p-4 rounded-md'>
        <h2 className='text-xl font-bold mb-4 text-center'>Sé parte de nosotros!</h2>
        <input
          type='number'
          value={contacto}
          onChange={handleContactoChange}
          className='mb-2 p-2 border border-gray-300 rounded-md w-full'
          placeholder='Contacto (número de teléfono)'
          required
        />
        <textarea
          value={explicacion}
          onChange={handleExplicacionChange}
          className='mb-2 p-2 border border-gray-300 rounded-md w-full'
          placeholder='Explique por qué desea ser parte del equipo'
          required
        />
        <div className='flex items-center mb-2'>
          <input
            type='checkbox'
            checked={esMayorDeEdad}
            onChange={handleEsMayorDeEdadChange}
            className='mr-2'
          />
          <span>Soy mayor de 18 años</span>
        </div>
        <div className='flex mb-2'>
          <input
            type='number'
            value={diaNacimiento}
            onChange={handleDiaNacimientoChange}
            className='mr-2 p-2 border border-gray-300 rounded-md w-1/3'
            placeholder='Día'
            required
          />
          <input
            type='number'
            value={mesNacimiento}
            onChange={handleMesNacimientoChange}
            className='mr-2 p-2 border border-gray-300 rounded-md w-1/3'
            placeholder='Mes'
            required
          />
          <input
            type='number'
            value={anioNacimiento}
            onChange={handleAnioNacimientoChange}
            className='p-2 border border-gray-300 rounded-md w-1/3'
            placeholder='Año'
            required
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full'
          disabled={!esMayorDeEdad}
        >
          Enviar solicitud
        </button>
        {!esMayorDeEdad && (
          <p className='text-red-500 mt-2'>Debes ser mayor de 18 años para postular.</p>
        )}
      </div>
    </form>
  )
}
