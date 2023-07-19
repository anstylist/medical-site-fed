<<<<<<< HEAD
import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./App.scss";
import AppointmentForm from "../components/MS-3 Form/AppointmentForm";
import WhoWeAre from "../components/MS-4 WhoWeAre/WhoWeAre";
=======
import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import './App.scss'
>>>>>>> cf1756e (Actualizacion de cambios - levantamiento de observacion)

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
<<<<<<< HEAD
      <Main>
        <AppointmentForm />
        <WhoWeAre />
=======
      <Statistics></Statistics>
=======
>>>>>>> cf1756e (Actualizacion de cambios - levantamiento de observacion)
      <Main>
        {/** Acá van los componentes de tipo Page */}
<<<<<<< HEAD
>>>>>>> 1006d1e (MS-5 - Create component Statistics)
=======
        <Statistics></Statistics>
        <OurDepartament></OurDepartament>
>>>>>>> efada3b (Complete MS6-ourDepartament and Update MS5-Statistic)
      </Main>
      <Footer />
    </>
  );
}

export default App;
