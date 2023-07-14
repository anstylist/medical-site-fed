import React from "react";
import Main from "../components/Main/Main";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./App.scss";
import AppointmentForm from "../components/MS-3 Form/AppointmentForm";

function App() {
  return (
    <>
      <Header />
      <AppointmentForm />
      <Main />
      <Footer />
    </>
  );
}

export default App;
