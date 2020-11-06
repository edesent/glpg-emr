import React from "react";
import Layout from "../components/layout";
import { Header } from "../components/Header";
import { Submenu } from "../components/Submenu";
import { Footer } from "../components/Footer";

const MessagesPage = () => {
  return (
    <Layout title="Messages">
      <Header />
      <Submenu title="Messages" />
      <Footer />
    </Layout>
  );
};

export default MessagesPage;
