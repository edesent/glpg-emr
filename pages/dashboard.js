import React from "react";
import Layout from "../components/layout";
import { Header } from "../components/Header";
import { Submenu } from "../components/Submenu";
import { Footer } from "../components/Footer";

const DashboardPage = () => {
  return (
    <Layout title="Dashboard">
      <Header />
      <Submenu title="Dashboard" />
      <Footer />
    </Layout>
  );
};

export default DashboardPage;
