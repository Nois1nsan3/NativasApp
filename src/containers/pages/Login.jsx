import { useState } from 'react'
import { FormularioLogin } from '../../components/FormularioLogin'
import { Layout } from '../../hoc/layout/Layout'
import loginImg from '../../assets/Roller_Login.png'
import { LoginSuccess } from '../../components/LoginSuccess'
import { db, app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { collection, query, where, getDocs } from 'firebase/firestore'

export function Login () {
  const admins = collection(db, 'admins')

  const auth = getAuth(app)
  const [successLog, setSuccessLog] = useState(false)

  const handleSuccess = async (usuario, pwd) => {
    await signInWithEmailAndPassword(auth, usuario, pwd)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log(user)

        // Verificar si es admin
        const q = query(admins, where('email', '==', usuario))
        const querySnapshot = await getDocs(q)

        // mostrar mensaje de exito
        setSuccessLog(true)

        if (!querySnapshot.empty) {
          // Es un administrador, redirigir a /adm
          window.location.href = '/adm'
        } else {
          // No es un administrador, redirigir a /user
          window.location.href = '/user'
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
      <div className='flex overflow-hidden h-screen w-screen'>
        <div className='filtro w-2/3 h-auto'>
          <img className='w-full h-full object-cover' src={loginImg} alt='' />
        </div>

        <div className='w-2/5 flex items-center justify-center'>
          {successLog
            ? (
              <LoginSuccess />
              )
            : (
              <FormularioLogin functionSuccess={handleSuccess} />
              )}
        </div>
      </div>
    </Layout>
  )
}
