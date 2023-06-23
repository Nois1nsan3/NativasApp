import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { FormularioSolicitud } from '../../components/FormularioSolicitud.jsx'
import { NavBar } from '../../components/NavBar.jsx'

export function SolicitudPage () {
  const [solicitudes, setSolicitudes] = useState([])

  useEffect(() => {
    const fetchSolicitudes = async () => {
      try {
        const snapshot = await db.collection('solicitudes').get()
        const solicitudesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        setSolicitudes(solicitudesData)
      } catch (error) {
        console.error('Error al obtener las solicitudes:', error)
      }
    }

    fetchSolicitudes()
  }, [])

  const handleSolicitud = async (contacto, explicacion) => {
    try {
      const docRef = await db.collection('solicitudes').add({
        contacto,
        explicacion,
        fecha: new Date().toISOString()
      })

      console.log('Solicitud enviada correctamente. ID:', docRef.id)

      const snapshot = await db.collection('solicitudes').doc(docRef.id).get()
      const nuevaSolicitud = { id: docRef.id, ...snapshot.data() }

      setSolicitudes((prevSolicitudes) => [nuevaSolicitud, ...prevSolicitudes])
    } catch (error) {
      console.error('Error al enviar la solicitud:', error)
      console.log(
        'Ocurrió un error al enviar la solicitud. Por favor, inténtalo de nuevo más tarde.'
      )
    }
  }

  return (
    <>
      <NavBar />
      <div>
        <FormularioSolicitud handleSolicitud={handleSolicitud} />
        <ul>
          {solicitudes.map((solicitud) => (
            <li key={solicitud.id}>
              <p>Contacto: {solicitud.contacto}</p>
              <p>Explicación: {solicitud.explicacion}</p>
              <p>Fecha: {solicitud.fecha}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
