import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <Layout>
      <Header />
      <Articles />
      <Footer />
    </Layout>
  );
};

export default Homepage;
