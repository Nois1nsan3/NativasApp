import React, { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { userAuth } from '../../context/AuthContext'
import { NavBar } from '../../components/NavBar'
import { FormularioRecuperar } from '../../components/FormularioRecuperar'

export function RecoverPass () {
  const [message, setMessage] = useState('')

  const handleRecuperar = (email) => {
    const { user } = userAuth()
    sendPasswordResetEmail(user, email)
      .then(() => {
        setMessage('Se ha enviado un correo electrónico para restablecer la contraseña.')
      }
      )
      .catch((error) => {
        setMessage(`Ha ocurrido un error. Inténtelo nuevamente. ${error}`)
      }
      )
  }

  return (
    <>
      <NavBar />
      <div className='container mx-auto py-8 flex flex-col items-center'>
        <h2 className='text-2xl font-bold mb-4'>Recuperar contraseña</h2>
        {message === ''
          ? (
            <FormularioRecuperar handleRecuperar={handleRecuperar} />
            )
          : (
            <p>{message}</p>
            )}
      </div>
    </>
  )
}
