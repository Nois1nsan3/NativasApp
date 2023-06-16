import { Link } from 'react-router-dom'

export function NavBar () {
  return (
    <nav className='w-screen h-16 flex justify-between items-center px-4 bg-indigo-600 text-white underline leading-normal '>
      <div>
        <h3>Nativas</h3>
      </div>
      <ul className='flex gap-6'>
        <li className='p-4 '>
          <Link to='/#/'>
            Informaciones
          </Link>
        </li>
        <li className='p-4'>
          <Link to='/uwu/'>
            Conocenos
          </Link>
        </li>
      </ul>
      <ul className='flex gap-6'>
        <li className='p-4'>
          <Link to='/login/'>
            Iniciar Sesion
          </Link>
        </li>

        <li className='p-4'>
          <Link to='/registrate/'>
            Registrate
          </Link>
        </li>
      </ul>
    </nav>

  )
}
