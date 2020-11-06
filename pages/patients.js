import React from "react";
import Layout from "../components/layout";
import { Header } from "../components/Header";
import { Submenu } from "../components/Submenu";
import { Footer } from "../components/Footer";

const PatientsPage = () => {
  return (
    <Layout title="GLPG Notes">
      <Header />
      <Submenu title="Patients" />
      <Footer />
    </Layout>
  );
};

export default PatientsPage;
