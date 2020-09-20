import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

const App = () => {
  // Citas en Local Storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Array de citas --> state principal donde se van a mostrat todas las citas
  const [citas, guardarCitas] = useState([citasIniciales]);

  // Hook useEffect() --> lo que hace es escuchar cuando haya un cambio en el state y realizar una accion
  useEffect(() => {
    if (citasIniciales) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, citasIniciales]);

  // Funcion que tome las citas actuales y agregue la nueva
  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  // Funcion que elimina una cita por su id
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Formulario crearCita={crearCita} />
          </Grid>
          <Grid item xs={6}>
            <h2>Administra tus Citas</h2>
            {citas.map((cita) => {
              return (
                <Cita eliminarCita={eliminarCita} key={cita.id} cita={cita} />
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
