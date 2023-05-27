import React from "react";
import registerImg from "../assets/Roller_Form.png";

const RegisterScreen = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        // contendor principal
        <div className="flex h-screen w-full ">
            <picture className="w-2/5 h-full filtro">
                <img
                    src={registerImg}
                    alt="Register"
                    className="w-full h-full "
                />
            </picture>
            {/* contenedor del formulario */}
            <div className="w-3/5 h-full flex justify-center items-center">
                <form
                    onSubmit={handleSubmit}
                    className="w-3/5 h-auto flex flex-col items-center justify-center gap-2"
                >
                    {/* contenedor del titulo */}
                    <div className="text-violet-700  font-caveat text-center my-8 txt-shadow flex flex-col gap-5">
                        <h1 className="font-bold text-5xl">
                            COMIENZA TOTALMENTE GRATIS
                        </h1>
                        <h2 className="text-xl">
                            INGRESA LA SIGUIENTE INFORMACIÓN PARA REGISTRARTE
                        </h2>
                    </div>
                    {/* contenedor de los inputs */}
                    <div className="w-full flex flex-col items-center gap-2.5">
                        {/* inputs nombre y apellido*/}
                        <div className="flex w-full  gap-2.5">
                            <input
                                className="w-1/2 font-mplus font-bold rounded-lg border-2 border-violet-600 p-2 "
                                type="text"
                                placeholder="Nombre"
                                required
                            />
                            <input
                                className="w-1/2 font-mplus font-bold rounded-lg border-2 border-violet-600 p-2.5 "
                                type="text"
                                placeholder="Apellido"
                                required
                            />
                        </div>
                        {/* inputs correo y contraseña */}
                        <div className="flex flex-col align-cener w-full my-2 gap-4">
                            <input
                                className="w-full  font-mplus font-bold rounded-lg border-2 border-violet-600 p-2.5"
                                type="email"
                                placeholder="Correo electrónico"
                                required
                            />
                            <input
                                className="w-full  font-mplus font-bold rounded-lg border-2 border-violet-600 p-2.5"
                                type="password"
                                placeholder="Contraseña"
                                required
                            />
                        </div>
                    </div>
                    {/* input checkbox */}
                    <div className="w-full">
                        <label className="font-mplus font-bold">
                            <input type="checkbox" required /> Acepto los
                            términos y condiciones del servicio
                        </label>
                    </div>
                    {/* boton de registro */}
                    <button
                        className="btn-indigo w-4/5 my-5 py-5 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold rounded-lg border-black"
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
