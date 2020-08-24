import React from "react";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";
import RandomArticles from "../components/Articles/RandomArticles/RandomArticles";
import Footer from "../components/Footer/Footer";

const RandomPage = () => {
  return (
    <Layout>
      <Header />
      <RandomArticles />
      <Footer />
    </Layout>
  );
};

export default RandomPage;
