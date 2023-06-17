import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const RecoverPass = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setMessage('Se ha enviado un correo electrónico para restablecer la contraseña.');
            }
            )
            .catch((error) => {
                setMessage('Ha ocurrido un error. Inténtelo nuevamente.');
            }
            );

    };

    return (
        <div>
            <h2>Recuperar contraseña</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Correo electrónico:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default RecoverPass;