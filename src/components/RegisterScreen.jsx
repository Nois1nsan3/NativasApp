import registerImg from '../assets/Roller_Form.png'
import { Formulario } from './Formulario.jsx'

export function RegisterScreen () {
  return (
    // contendor principal
    <div className='flex h-screen w-full overflow-hidden'>
      <picture className='w-2/5 h-full filtro'>
        <img src={registerImg} alt='Register' className='w-full h-full' />
      </picture>
      {/* contenedor del formulario */}
      <div className='w-3/5 h-full flex justify-center items-center'>
        <Formulario />
      </div>
    </div>
  )
}
