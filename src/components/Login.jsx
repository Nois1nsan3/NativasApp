import React from 'react'
import loginImg from '../assets/Roller_Login.png'

export default function Login() {
    return (
        <div className='flex overflow-hidden h-screen w-full'>
            <div className='filtro w-3/5'>
                <img className='w-full h-full object-cover' src={loginImg} alt="" />
            </div>

            <div className='w-2/5 flex items-center justify-center'>
                <form className='w-full flex flex-col items-center p-8'>
                    <div className='bg-clip-text bg-gradient-to-r from-purple-500 to-violet-400 to-indigo-500'>
                        <h2 className='text-6xl pb-20 px-8 font-bold text-transparent font-caveat text-center'>BIENVENIDO</h2>
                    </div>
                    <div className='w-3/5 flex flex-col py-2'>
                        <label className='font-mplus text-3xl font-bold'>Usuario</label>
                        <input className='py-3 font-mplus font-bold rounded-lg border-2 border-blue-700 mt-2 p-2' 
                        placeholder='HOLA@TUCORREO.CL' 
                        type="text" />
                    </div>
                    <div className='w-3/5 flex flex-col py-2'>
                        <label className='font-mplus text-3xl font-bold '>Contraseña</label>
                        <input className='py-3 font-mplus font-bold rounded-lg border-2 border-violet-600 mt-2 p-2'
                         placeholder='INGRESA TU CONTRASEÑA' 
                         type="password" />
                    </div>
                    <div className='flex flex-col font-marvel text-indigo-700 justify-center py-2'>
                        <p>¿No tienes una cuenta? Registrate!</p>
                        <p>¿Olvidaste tu contraseña? </p>
                    </div>
                    <button className='w-5/12 my-5 py-5 bg-gradient-to-r from-blue-500 to-purple-500 to-violet-500 text-white font-semibold rounded-lg'>INGRESAR</button>

                </form>
            </div>
        </div>
    )
}