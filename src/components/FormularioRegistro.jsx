import { Link } from 'react-router-dom'

export function FormularioRegistro () {
  return (
    <form className='w-2/5 h-full flex flex-col items-center justify-center gap-2 overflow-hidden'>
      {/* contenedor del titulo */}
      <div className='text-violet-700  font-caveat text-center txt-shadow flex flex-col gap-2.5'>
        <h1 className='font-bold text-5xl'>COMIENZA TOTALMENTE GRATIS</h1>
        <h2 className='text-xl'>
          INGRESA LA SIGUIENTE INFORMACIÓN PARA REGISTRARTE
        </h2>
      </div>
      {/* contenedor de los inputs */}
      <div className='w-full flex flex-col items-center gap-2.5'>
        {/* inputs nombre y apellido */}
        <div className='flex w-full  gap-2.5'>
          <input
            className='w-1/2 font-mplus font-bold rounded-lg border-2 border-violet-600 p-2 '
            type='text'
            placeholder='Nombre'
            required
          />
          <input
            className='w-1/2 font-mplus font-bold rounded-lg border-2 border-violet-600 p-2.5 '
            type='text'
            placeholder='Apellido'
            required
          />
        </div>
        {/* inputs correo y contraseña */}
        <div className='flex flex-col align-cener w-full my-2 gap-4'>
          <input
            className='w-full font-mplus font-bold rounded-lg border-2 border-violet-600 p-2.5'
            type='email'
            placeholder='Correo electrónico'
            required
          />
          <input
            className='w-full font-mplus font-bold rounded-lg border-2 border-violet-600 p-2.5'
            type='password'
            placeholder='Contraseña'
            required
          />
        </div>
      </div>
      {/* input checkbox */}
      <div className='w-full'>
        <label className='font-mplus font-bold'>
          <input type='checkbox' required /> Acepto los términos y condiciones del servicio
        </label>
      </div>

      {/* container de los botones */}
      <div className='w-full flex gap-2.5'>

        {/* boton de registro */}
        <button
          className='btn-indigo w-1/2 my-5 py-5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg'
          type='submit'
        >
          CREAR UNA CUENTA
        </button>

        {/* boton de inicio de sesion */}
        <Link to='/Login/' className='btn-indigo w-1/2 my-5 py-5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg text-center'>
          INICIA SESIÓN
        </Link>

      </div>
    </form>
  )
}
