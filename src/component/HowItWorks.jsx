import React from "react";
import Heading from "./Heading";
import { howItWorks } from "@/utils/constant";

const HowItWorks = () => {
  return (
    <>
      <div className="min-h-[70vh] h-auto mt-[100px]">
        <Heading
          title={"How it Works"}
          para={"Transform Words Into Stunning Images"}
        />
        <div>
          {howItWorks.map((items) => {
            return (
              <div
                key={items.id}
                className="flex items-center space-x-3 transition-all duration-100 hover:shadow-xl cursor-pointer my-[20px] border  py-4 px-4 w-[50vw] max-md:w-[90%] max-md:px-5 rounded-lg shadow-md mx-auto"
              >
                <img className="w-[50px]" src={items.icon} alt="" />
                <div>
                  <h1 className="font-bold">{items.headingName}</h1>
                  <p className="mt-1">{items.paraName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
