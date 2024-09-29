import React, { useState } from 'react';

const LoginPages = () => {
  const [password, setPassword] = useState('');
  const [mail, setMail] = useState('');
  

  function onInputChange({ target }) {
    const { value, name } = target;

    if (name === 'password') {
      setPassword(value);
    } else if (name === 'mail') {
      setMail(value);
    }
  }

  function onSubmitHandler(event) {
    event.preventDefault();

    
    if (!password || !mail) {
      alert ('Todos los campos son obligatorios.');
      return;
    }

    
    if (password.length < 6) {
      alert ('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    alert('Login exitoso');

    
    setPassword('');
    setMail('');
   
  }

  return (
    <> 
      <div className='formularioLogin'>
        <h1>Login</h1>


        <form className='cajaLogin' onSubmit={onSubmitHandler}>
          <h3>Ingresa tu Email</h3>
          <input
            type="email"
            placeholder='Ingresa tu email'
            onChange={onInputChange}
            value={mail}
            name='mail'
          />

          <h3>Ingresa tu contraseña</h3>
          <input
            type="password"
            placeholder='Ingresa una contraseña'
            onChange={onInputChange}
            value={password}
            name='password'
          />

          <button className='btnLogin' type='submit'>Enviar</button>
        </form>
      </div>
    </>
  );
}

export default LoginPages;