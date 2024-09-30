import React from "react";
import Navbar from "./../../Components/navbar/Navbar";
import SideBar from "./../../Components/sidebar/SideBar";
import Footer from "./../../Components/footer/Footer";

const MainHome = () => {
  return (
    <div>
      <div className={`app-container `}>
        <Navbar />
        <div className="main-container">
          <SideBar />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainHome;
