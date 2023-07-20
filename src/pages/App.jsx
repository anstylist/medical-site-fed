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
import OurPartners from '../components/OurPartners/OurPartners'
import OurTestimonials from '../components/OurTestimonials/OurTestimonials'

=======
import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./App.scss";
import AppointmentForm from "../components/MS-3 Form/AppointmentForm";

>>>>>>> 4809be5 (Commit to be able to pull the carousel library from the repo)
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
      </Main>
=======
      <AppointmentForm />
      <Main />
>>>>>>> 4809be5 (Commit to be able to pull the carousel library from the repo)
      <Footer />
    </>
  );
}

export default App;
