<<<<<<< HEAD
import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./App.scss";
import AppointmentForm from "../components/MS-3 Form/AppointmentForm";
import WhoWeAre from "../components/MS-4 WhoWeAre/WhoWeAre";
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
=======
import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import './App.scss'
>>>>>>> 548d70a1e1f185e7e820ae534309bd97b6722490
import OurPartners from '../components/OurPartners/OurPartners'
import OurTestimonials from '../components/OurTestimonials/OurTestimonials'

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Main>
        <AppointmentForm />
        <WhoWeAre />
        <Statistics />
        <OurDepartament />
        <OurTestimonials />
        <OurPartners />
=======
        <Statistics></Statistics>
        <OurDepartament></OurDepartament>
        <OurTestimonials></OurTestimonials>
        <OurPartners></OurPartners>
      <Main>
        {/** Acá van los componentes de tipo Page */}
>>>>>>> 548d70a1e1f185e7e820ae534309bd97b6722490
      </Main>
      <Footer />
    </>
  );
}

export default App;
