import { FormularioLogin } from '../../components/FormularioLogin'
import { Layout } from '../../hoc/layout/Layout'
import loginImg from '../assets/Roller_Login.png'

export default function Login () {
  return (
    <Layout>
      <div className='flex overflow-hidden h-screen w-full'>
        <div className='filtro w-3/5'>
          <img className='w-full h-full object-cover' src={loginImg} alt='' />
        </div>

        <div className='w-2/5 flex items-center justify-center'>
          <FormularioLogin />
        </div>

      </div>
    </Layout>
  )
}
