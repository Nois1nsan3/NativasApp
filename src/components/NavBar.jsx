export function NavBar () {
  return (
    <nav className='w-screen h-16 flex justify-between items-center px-4 bg-indigo-600 text-white underline '>
      <div>
        <h3>Nativas</h3>
      </div>
      <ul className='flex gap-6'>
        <li className='p-4'>Informaciones</li>
        <li className='p-4'>Conocenos</li>
      </ul>
      <ul className='flex gap-6'>
        <li className='p-4'>Iniciar Sesion</li>
        <li className='p-4'>Registrate</li>
      </ul>
    </nav>

  )
}
