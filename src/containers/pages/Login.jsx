import React, { useState } from 'react'
import { FormularioLogin } from '../../components/FormularioLogin'
import { Layout } from '../../hoc/layout/Layout'
import { NavBar } from '../../components/NavBar'
import loginImg from '../../assets/Roller_Login.png'
import { Mensaje } from '../../components/Mensaje'
import { db, app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export function Login () {
  const admins = collection(db, 'admins')
  const navigate = useNavigate()
  const auth = getAuth(app)
  const [successLog, setSuccessLog] = useState(false)

  const handleSuccess = async (usuario, pwd) => {
    await signInWithEmailAndPassword(auth, usuario, pwd)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user
        // Verificar si es admin
        const q = query(admins, where('email', '==', usuario))
        const querySnapshot = await getDocs(q)

        // mostrar mensaje de exito
        if (user) {
          setSuccessLog(true)
          setTimeout(() => {
            if (!querySnapshot.empty) {
              // Es un administrador, redirigir a /adm
              navigate('/adm')
            } else {
              // No es un administrador, redirigir a /user
              navigate('/user')
            }
          }, 1500)
        } else {
          console.log('No es un usuario')
        }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  return (
    <Layout>
      <div className='h-screen w-full overflow-hidden '>
        <NavBar />

        <div className='w-full h-screen md:flex'>
          <picture className='w-3/6 filtro'>
            <img className='w-full h-full' src={loginImg} alt='' />
          </picture>

          <div className='absolute top-[20%] left-[25%] sm:left-[30%] md:relative md:left-2 md:top-4 md:w-2/5'>
            {successLog
              ? (
                <Mensaje mensaje='Login Correcto' />
                )
              : (
                <FormularioLogin functionSuccess={handleSuccess} />
                )}
          </div>

        </div>
      </div>
    </Layout>
  )
}
