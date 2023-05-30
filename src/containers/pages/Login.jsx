import { useState } from 'react'

import { FormularioLogin } from '../../components/FormularioLogin'
import { Layout } from '../../hoc/layout/Layout'
import loginImg from '../../assets/Roller_Login.png'
import { LoginSuccess } from '../../components/LoginSuccess'

export function Login () {
  const [success, setSuccess] = useState(false)

  const handleSuccess = () => {
    setSuccess(!success)
  }

  return (
    <Layout>
      <div className='flex overflow-hidden h-screen w-full'>
        <div className='filtro w-3/5'>
          <img className='w-full h-full object-cover' src={loginImg} alt='' />
        </div>

        <div className='w-2/5 flex items-center justify-center'>
          {success
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
