import React from 'react'
import loginImg from '../assets/Roller_Login.png'

export default function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-white flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                <h2 className='text-4xl dark:text-black font-bold text-center'>BIENVENIDO</h2>
                <div className='flex flex-col text-black py-2'>
                    <label>Usuario</label>
                    <input className='rounded-lg border border-blue-700 to-purple-500 to-violet-600 bg-white mt-2 p-2' type="text" />
                </div>
                <div className='flex flex-col text-black py-2'>
                    <label>Contraseña</label>
                    <input className='p-2 rounded-lg border border-violet-600 to-purple-500 to-blue-700 bg-white mt-2' type="password" />
                </div>
                <div className='flex flex-col justify-center text-black py-2'>
                    <p>¿No tienes una cuenta? Registrate!</p>
                    <p>¿Olvidaste tu contraseña?</p>
                </div>
                <button className='w-full my-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 to-violet-500 text-white font-semibold rounded-lg'>INGRESAR</button>
                
            </form>
        </div>
    </div>
  )
}