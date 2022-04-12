import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [validator, setValidator] = useState({
    ok: false,
    where: "",
    message: "",
  });

  const handleChangeForm = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValues.name.length > 14){
      setValidator({
        ok: true,
        where: "name",
        message: "El nombre debe de ser menor a 14 caracteres."
      })
    } else {
      setValidator({
        ok: false,
      where: "",
      message: "",
      })
    }
    if (formValues.password.length < 8){
      setValidator({
        ok: true,
        where: "password",
        message: "La contraseña debe de ser mayor a 8 caracteres."
      })
    } else {
      setValidator({
        ok: false,
      where: "",
      message: "",
      })
    }
    if (formValues.password !== formValues.passwordConfirm) {
      setValidator({
        ok: true,
        where: "password",
        message: "Las contraseñas no coinciden.",
      });
    } else {
      setValidator({
        ok: false,
      where: "",
      message: "",
      })
    }
  };
  return (
    <div className="auth-main-container">
      <div className="auth-back-img"></div>
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div className="auth-inputs-container">
          <div className="auth-input">
            <label htmlFor="name">Nombre</label>
            <input
              style={{backgroundColor: `${(validator.where==='name')? '#ff7878': '#abdff8'}`}}
              type="text"
              name="name"
              placeholder="Ingresa el Correo"
              onChange={handleChangeForm}
              value={formValues.name}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              placeholder="Ingresa el Correo"
              onChange={handleChangeForm}
              value={formValues.email}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="password">Contraseña</label>
            <input
              style={{backgroundColor: `${(validator.where==='password')? '#ff7878': '#abdff8'}`}}
              type="password"
              name="password"
              placeholder="Ingresa la contraseña"
              onChange={handleChangeForm}
              value={formValues.password}
            />
          </div>
          <div className="auth-input">
            <label htmlFor="password">Confirmar contraseña</label>
            <input
              style={{backgroundColor: `${(validator.where==='password')? '#ff7878': '#abdff8'}`}}
              type="password"
              name="passwordConfirm"
              placeholder="Ingresa la contraseña"
              onChange={handleChangeForm}
              value={formValues.passwordConfirm}
            />
          </div>
        </div>
        {
          (validator.ok===true)?
          <span className="auth-error">{validator.message}</span>
          : 
          <></>
        } 
        <button  >Registrarme</button>
        <p>
          Ya tengo cuenta!{" "}
          <span onClick={() => navigate("/login")}>iniciar sesion</span>
        </p>
      </form>
    </div>
  );
};
