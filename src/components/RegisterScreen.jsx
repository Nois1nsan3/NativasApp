import React from "react";
import registerImg from "../assets/Roller_Form.png";

const RegisterScreen = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        // contendor principal
        <div className="flex w-scre w-full bg-slate-500">
            <picture className="w-1/2 h-full">
                <img
                    src={registerImg}
                    alt="Register"
                    className="w-full h-full object-cover"
                />
            </picture>
            {/* contenedor del formulario */}
            <div className="w-1/2 h-full flex items-center justify-center m-20">
                <form
                    onSubmit={handleSubmit}
                    className="w-4/5 h-4/5 flex flex-col items-center justify-between font-sans"
                >
                    {/* contenedor del titulo */}
                    <div>
                        <h1 className="text-gray-700 font-bold size-3xl">
                            COMIENZA TOTALMENTE GRATIS
                        </h1>
                        <h2 className="text-gray-600">
                            INGRESA LA SIGUIENTE INFORMACIÓN PARA REGISTRARTE
                        </h2>
                    </div>
                    {/* contenedor de los inputs */}
                    <div className="w-full">
                        {/* inputs nombre y apellido*/}
                        <div className="flex justify-between w-full mb-20">
                            <input
                                className="w-5/12 p-2.5 border-none"
                                type="text"
                                placeholder="Nombre"
                                required
                            />
                            <input
                                className="w-5/12 p-2.5 border-none"
                                type="text"
                                placeholder="Apellido"
                                required
                            />
                        </div>
                        {/* inputs correo y contraseña */}
                        <div className="flex flex-col align-cener w-full mb-5">
                            <input
                                className="w-full p-2.5 border-none"
                                type="email"
                                placeholder="Correo electrónico"
                                required
                            />
                            <input
                                className="w-full mt-5 p-2.5 border-none"
                                type="password"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                    </div>
                    {/* input checkbox */}
                    <div className="">
                        <label>
                            <input type="checkbox" required /> Acepto los
                            términos y condiciones del servicio
                        </label>
                    </div>
                    {/* boton de registro */}
                    <button
                        className="mt-5 p-2.5 border text-white bg-blue-500 rounded-lg"
                        type="submit"
                    >
                        CREAR UNA CUENTA
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterScreen;
