import equipo from '../assets/roller-derby.jpg'

export const Equipo = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[450px] mx-auto my-4' src={equipo} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-indigo-500 font-bold '>Que es el Roller Derby</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Descubre el emocionante mundo del Roller Derby:</h1>
          <p className='p-2'>
            El Roller Derby es un deporte femenino de contacto al que se juega con patines de paralelo sobre una pista oval. Se patina siempre en el sentido contrario a las agujas del reloj.
          </p>
          <p className='p-2'>
            Cada partido o Bout de Roller Derby consta de dos tiempos de 30 minutos que se dividen en carreras de hasta 2 minutos llamadas JAM. Hay dos equipos formados por 5 jugadoras cada uno. El grupo de 8 jugadoras en cabeza se llama Pack.
          </p>
          <p className='p-2'>
            El pack está formado por 4 bloqueadoras de cada equipo. A la cabeza del pack se suelen situar los Pívot de cada equipo, que se distinguen de las demás bloqueadoras por llevar una cubierta de casco con una raya. Las pívot suelen encargarse de organizar el pack y la estrategia de su equipo. Las bloqueadoras obstaculizan a la jammer rival y ayudan a la suya a adelantar al pack.
          </p>          <button className='bg-black text-indigo-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Comienza</button>
        </div>
      </div>
    </div>
  )
}
