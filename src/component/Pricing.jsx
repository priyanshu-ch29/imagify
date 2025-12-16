import React from "react";
import Heading from "./Heading";
import PriceCards from "./PriceCards";

const Pricing = () => {
  return (
    <>
      <div>
        <Heading
          title={"Plans and Pricing"}
          para={
            "Recieve Unlimited Credits and when you pay yearly and save on you plans"
          }
        />
        <PriceCards />
      </div>
    </>
  );
};

export default Pricing;
