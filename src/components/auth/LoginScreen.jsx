import React from 'react'

export const LoginScreen = () => {
  return (
    <div className='auth-main-container'>
      <div className='auth-back-img'>
      </div>
      <form>
        <h1>Inicio de Sesion</h1>
        <div className='auth-inputs-container'>
          <div className='auth-input'>
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" placeholder='Ingresa el Correo'/>
          </div>
          <div className='auth-input'>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" placeholder='Ingresa la contraseña'/>
          </div> 
        </div>
        <button>Iniciar Sesion</button>
      </form>
    </div>
  )
}
