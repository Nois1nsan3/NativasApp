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
    <form onSubmit={handleSubmit}>
      <label>
        Correo electrónico:
        <input type='email' value={email} onChange={handleEmailChange} />
      </label>
      <button type='submit'>Enviar</button>
    </form>
  )
}
