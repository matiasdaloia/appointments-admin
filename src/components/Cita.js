import React from "react";
import PropTypes from "prop-types";

const Cita = ({ cita, id, eliminarCita }) => {
  return (
    <div className="cita">
      <p>
        Mascota:<span>{cita.mascota}</span>
      </p>
      <p>
        Dueño:<span>{cita.propietario}</span>
      </p>
      <p>
        Fecha:<span>{cita.fecha}</span>
      </p>
      <p>
        Hora:<span>{cita.hora}</span>
      </p>
      <p>
        Sintomas:<span>{cita.sintomas}</span>
      </p>
      <button
        onClick={() => eliminarCita(cita.id)}
        className="button eliminar u-full-width"
      >
        Eliminar &times;{" "}
      </button>
    </div>
  );
};

Cita.propTypes = {
  eliminarCita: PropTypes.func,
  cita: PropTypes.object.isRequired,
};

export default Cita;
