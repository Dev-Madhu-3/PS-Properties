import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

const MainLayout = ({ children }) => {
  useScrollToTop();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
