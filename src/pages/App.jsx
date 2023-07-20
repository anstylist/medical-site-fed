
import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./App.scss";
import AppointmentForm from "../components/MS-3 Form/AppointmentForm";
import WhoWeAre from "../components/MS-4 WhoWeAre/WhoWeAre";
import OurDepartament from '../components/OurDepartament/OurDepartament'
import Statistics from '../components/Statistics/Statistics'
import OurPartners from '../components/OurPartners/OurPartners'
import OurTestimonials from '../components/OurTestimonials/OurTestimonials'

function App() {
  return (
    <>
      <Header />
      <Main>
        <AppointmentForm />
        <WhoWeAre />
        <Statistics />
        <OurDepartament />
        <OurTestimonials />
        <OurPartners />
      </Main>
      <Footer />
    </>
  );
}

export default App;
