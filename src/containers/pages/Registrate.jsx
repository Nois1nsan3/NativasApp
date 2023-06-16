import React, { useState } from 'react'
import { FormularioRegistro } from '../../components/FormularioRegistro'
import registerImg from '../../assets/Roller_Form.png'
import { Mensaje } from '../../components/Mensaje'
import { Layout } from '../../hoc/layout/Layout'
import { app, db } from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'

export function Registrate () {
  const [successReg, setSuccessReg] = useState(false)
  const auth = getAuth(app)

  const agregarUsuario = async (usuario) => {
    try {
      const docRef = await addDoc(collection(db, 'users'), usuario)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  const handleRegistro = async ({ nombre, apellido, correo, password, terminos }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, password)
      const user = userCredential.user

      if (user) {
        const newUser = {
          nombre,
          apellido,
          correo,
          terminos
        }

        await agregarUsuario(newUser)
        console.log('Usuario agregado')
        setSuccessReg(true)
        setTimeout(() => {
          window.location.href = '/login'
        }, 3000)
      }
    } catch (error) {
      const errorCode = error.code
      const errorMessage = error.message
      console.log(errorCode)
      console.log(errorMessage)
    }
  }

  return (
    <Layout>
      <div className='flex h-screen w-full overflow-hidden'>
        <picture className='w-2/5 h-full filtro'>
          <img src={registerImg} alt='Register' className='w-full h-full' />
        </picture>
        {/* contenedor del formulario */}
        <div className='w-3/5 h-full flex justify-center items-center'>
          {successReg
            ? (
              <Mensaje mensaje='Registro exitoso' />
              )
            : (
              <FormularioRegistro handleRegistro={handleRegistro} />
              )}
        </div>
      </div>
    </Layout>
  )
}
