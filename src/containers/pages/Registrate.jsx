import registerImg from '../../assets/Roller_Form.png'
import { FormularioRegistro } from '../../components/FormularioRegistro'
import { Layout } from '../../hoc/layout/Layout'

export function Registrate () {
  return (
    <Layout>
      <div className='flex h-screen w-full overflow-hidden'>
        <picture className='w-2/5 h-full filtro'>
          <img src={registerImg} alt='Register' className='w-full h-full' />
        </picture>
        {/* contenedor del formulario */}
        <div className='w-3/5 h-full flex justify-center items-center'>
          {/* <FormularioRegistro /> */}
          <FormularioRegistro />
        </div>
      </div>
    </Layout>
  )
}
