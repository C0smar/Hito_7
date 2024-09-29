import React, { useState } from 'react';

 const RegisterPages = () => {

   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')
   const [mail, setMail] = useState('')
    

    function onInputChange ({target}) {
        const {value, name} = target

        if (name === 'password'){
            setPassword(value)
        }else if (name === 'mail'){
            setMail(value)
        }else if (name === 'confirmPassword'){
            setConfirmPassword(value)
        } 
    }

    function onSubmitHandler (event) {

        event.preventDefault()

        if (!password || !confirmPassword || !mail ){
          alert ('Todos los campos son obligatorios')
          return
        }else if (password.length < 6) {
          alert ('La contraseña debe tener al menos 6 caracteres.');
         return;
        }else if (password !== confirmPassword) {
          alert ('Las contraseñas no coinciden.');
          return;
        } else { alert ("Registro exitoso")}

        
       
        setPassword ('')
        setConfirmPassword ('')
        setMail ('')
        
    }

  return (
    <> 
     <div className='formularioRegistro'>
        <h1> Registro </h1>
        
        <form className='cajaRegistro' action='' onSubmit={onSubmitHandler}>

            <h3>Ingresa un Email </h3>
            <input 
              type="email"
              placeholder='Ingresa tu email'
              onChange={onInputChange}
              value={mail}
              name='mail'
              />

            <h3> ingresa una contraseña</h3>
            <input 
                type="password" 
                placeholder='ingresa una contraseña'
                onChange={onInputChange}
                value={password}
                name='password'
                />

            <h3>confirma tu contraseña</h3>
            <input 
                type="password"
                placeholder='confirma la contraseña'
                onChange={onInputChange}
                value={confirmPassword}
                name='confirmPassword'
                
                />





            <button className='btnRegister'type='submit'>Enviar</button>
        </form>
    
    
    </div>
    </>
  )
}

export default RegisterPages