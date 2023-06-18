import { useState } from 'react'

export function FormularioRecuperar ({ handleRecuperar }) {
  const [email, setEmail] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    handleRecuperar(email)
  }

  return (
    <form onSubmit={handleSubmit} className='flex justify-center items-center'>
      <div className='bg-gray-100 p-4 rounded-md justify-center items-center flex flex-col'>
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          className='mb-2 p-2 rounded-md border-2 border-gray-300 w-60'
          placeholder='Correo electrónico'
        />
        <button
          type='submit'
          className='btn-indigo w-2/5 my-2.5 py-2.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-lg'
        >
          Enviar
        </button>
      </div>
    </form>
  )
}
