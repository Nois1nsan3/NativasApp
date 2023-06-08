import { useState } from 'react'

import { FormularioLogin } from '../../components/FormularioLogin'
import { Layout } from '../../hoc/layout/Layout'
import loginImg from '../../assets/Roller_Login.png'
import { app } from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

export function Login () {
  const [successLog, setSuccessLog] = useState(null)

  const handleSuccess = async (usuario, pwd) => {
    await signInWithEmailAndPassword(auth, usuario, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        setSuccessLog(user)
        // ...
      }
      ).then(() => {
        console.log(successLog)
      })
  }

  return (
    <Layout>
      <div className='flex overflow-hidden h-screen w-screen'>
        <div className='filtro w-2/3 h-auto'>
          <img className='w-full h-full object-cover' src={loginImg} alt='' />
        </div>

        <div className='w-2/5 flex items-center justify-center'>
          <FormularioLogin functionSuccess={handleSuccess} />
        </div>
      </div>
    </Layout>
  )
}
