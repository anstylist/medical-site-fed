import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./App.scss";
import AppointmentForm from "../components/MS-3 Form/AppointmentForm";
import WhoWeAre from "../components/MS-4 WhoWeAre/WhoWeAre";

function App() {
  return (
    <>
      <Header />
<<<<<<< HEAD
      <Main>
        <AppointmentForm />
        <WhoWeAre />
=======
      <Statistics></Statistics>
      <Main>
        {/** Acá van los componentes de tipo Page */}
>>>>>>> 1006d1e (MS-5 - Create component Statistics)
      </Main>
      <Footer />
    </>
  );
}

export default App;
