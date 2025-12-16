import React from "react";
import Banner from "./Banner";
import Images from "./Images";
import HowItWorks from "./HowItWorks";
import Infor from "./Infor";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <div className="">
        <div className="py-5 font-poppins">
          <Banner />
          <Images />
          <HowItWorks />
        </div>
        <div className="main-2 font-poppins">
          <Infor />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Body;
