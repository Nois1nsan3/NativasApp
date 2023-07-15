// import Typed from 'react-typed'
import rollerImage from '../assets/roller.jpg'
import { useNavigate } from 'react-router-dom'

export function Hero () {
  const navigate = useNavigate()

  const handleUnetenos = () => {
    navigate('/registrate')
  }

  return (
    <div
      className='text-white txt-shadow bg-cover h-full flex-grow flex flex-col justify-center items-center'
      style={{ backgroundImage: `url(${rollerImage})` }}
    >
      <div className='max-w-[800px] w-full h-full text-center flex flex-col justify-center'>
        <p className=' text-xl sm:text-2xl md:text-4xl md:mt-10 text-indigo-700 font-bold p-2'>
          Patina con nosotros y gana dinero
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md-2'>
          Nativas
        </h1>
        <div className='flex justify-center items-center flex-col md:mt-10 '>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
            ¡Conviértete en parte de nuestra familia!
          </p>
          {/* <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold pl-2'
            strings={['Patina', 'Gana dinero', 'Diviértete']}
            typeSpeed={120}
            backSpeed={140}
            loop
          /> */}
        </div>
        <button
          onClick={handleUnetenos}
          type='button'
          className='bg-indigo-500 text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'
        >
          Unetenos
        </button>
        <div />
      </div>

    </div>
  )
}
