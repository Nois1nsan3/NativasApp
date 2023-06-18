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
      <div className='bg-gray-100 p-4 rounded-md'>
        <input
          type='email'
          value={email}
          onChange={handleEmailChange}
          className='mb-2'
          placeholder='Correo electrónico'
        />
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Enviar
        </button>
      </div>
    </form>
  )
}
