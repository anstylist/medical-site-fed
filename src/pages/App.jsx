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
      <Main>
        <AppointmentForm />
        <WhoWeAre />
      </Main>
      <Footer />
    </>
  );
}

export default App;
