import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Formulario = ({ crearCita }) => {
  // Crear State de citas
  const [cita, actualizarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  // Crear State para validar el formulario:

  const [error, actualizarError] = useState(false);

  // Definir funcion handleChange : se ejecuta cada vez que el usuario escribe en el input
  const handleChange = (evento) => {
    actualizarCita({
      ...cita,
      [evento.target.name]: evento.target.value,
    });
  };

  // Extraer los valores en el state 'cita' :
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Cuando el user presiona Agregar Cita :

  const submitCita = (evento) => {
    //prevenir accion por default (enviar con metodo get)
    evento.preventDefault();

    //Validar
    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      actualizarError(true); // actualiza el state 'error' a true
      return;
    }

    // Eliminar el error previo:
    actualizarError(false);

    //Asignar un ID
    cita.id = uuidv4();
    console.log(cita);

    //Crear la cita
    crearCita(cita);

    //Reiniciar el FORMULARIO
    actualizarCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label htmlFor="mascota">Nombre de la Mascota</label>
        <input
          type="text"
          name="mascota"
          id="mascota"
          placeholder="Ingresa el nombre de tu mascota"
          className="u-full-width"
          onChange={handleChange}
          value={mascota}
        />
        <label htmlFor="propietario">Nombre del dueño </label>
        <input
          type="text"
          name="propietario"
          id="propietario"
          placeholder="Ingresa tu nombre"
          className="u-full-width"
          onChange={handleChange}
          value={propietario}
        />
        <label htmlFor="fecha">Fecha </label>
        <input
          type="date"
          name="fecha"
          id="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label htmlFor="hora">Hora </label>
        <input
          type="time"
          name="hora"
          id="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label htmlFor="sintomas">Descripcion de los síntomas </label>
        <textarea
          name="sintomas"
          id="sintomas"
          cols="30"
          rows="10"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  crearCita: PropTypes.func,
};

export default Formulario;
