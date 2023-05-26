import React from "react";
import registerImg from '../assets/Roller_Form.png';

const RegisterScreen = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div style={{display: 'flex', height: '100vh', backgroundColor: '#F0F0F0'}}>
      <div style={{width: '40%', height: '100%'}}>
        <img src={registerImg} alt="Register" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>  
      <div style={{width: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <form onSubmit={handleSubmit} style={{width: '80%', height: '80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'Arial'}}>
          <div>
            <h1 style={{fontSize: '3em', fontWeight: 'bold', color: '#333'}}>COMIENZA TOTALMENTE GRATIS</h1>
            <h2 style={{color: '#777'}}>INGRESA LA SIGUIENTE INFORMACIÓN PARA REGISTRARTE</h2>
          </div>
          <div style={{width: '100%'}}>
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '20px'}}>
              <input style={{width: '45%', padding: '10px', borderRadius: '10px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}} type="text" placeholder="Nombre" required />
              <input style={{width: '45%', padding: '10px', borderRadius: '10px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}} type="text" placeholder="Apellido" required />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginBottom: '20px'}}>
              <input style={{width: '100%', padding: '10px', borderRadius: '10px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}} type="email" placeholder="Correo electrónico" required />
              <input style={{width: '100%', marginTop: '20px', padding: '10px', borderRadius: '10px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'}} type="password" placeholder="Contraseña" required />
            </div>
          </div>
          <div style={{alignSelf: 'flex-start', marginBottom: '10px'}}>
            <label style={{fontSize: '0.9em'}}>
              <input type="checkbox" required /> Acepto los términos y condiciones del servicio
            </label>
          </div>
          <button style={{marginTop: '20px', padding: '10px', borderRadius: '10px', border: 'none', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer'}} type="submit">CREAR UNA CUENTA</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
