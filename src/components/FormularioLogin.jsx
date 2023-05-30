import { useState } from 'react'

export function FormularioLogin () {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const handleFormulario = (e) => {
    e.preventDefault()
    console.log('usuario', usuario)

    const data = {
      usuario,
      password

    }
  }

  return (
    <form className='w-full flex flex-col items-center p-8'>
      <div className='bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>
        <h2 className='text-6xl pb-20 px-8 font-bold text-transparent font-caveat text-center txt-shadow'>
          BIENVENIDO
        </h2>
      </div>
      <div className='w-3/5 flex flex-col py-2'>
        <label className='font-mplus text-3xl font-bold'>Usuario</label>
        <input
          onChange={(e) => setUsuario(e.target.value)}
          className='py-3 font-mplus font-bold rounded-lg border-2 border-blue-700 mt-2 p-2'
          placeholder='HOLA@TUCORREO.CL'
          type='text'
        />
      </div>
      <div className='w-3/5 flex flex-col py-2'>
        <label className='font-mplus text-3xl font-bold '>Contraseña</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className='py-3 font-mplus font-bold rounded-lg border-2 border-violet-600 mt-2 p-2'
          placeholder='INGRESA TU CONTRASEÑA'
          type='password'
        />
      </div>
      <div className='flex flex-col font-marvel text-indigo-700 justify-center py-2'>
        <p>¿No tienes una cuenta ? Registrate!</p>
        <p>¿Olvidaste tu contraseña? </p>
      </div>
      <button
        onClick={handleFormulario}
        className='btn-indigo w-4/5 my-5 py-5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg'
      >
        INGRESAR
      </button>
    </form>
  )
}
