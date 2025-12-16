import React from "react";
import Heading from "./Heading";
import img2 from "/info.png";

const Infor = () => {
  return (
    <>
      <div className="min-h-[70vh]">
        <Heading
          title={"Create Ai Images"}
          para={"Turn your imagination into visuals"}
        />
        <div className="flex justify-center flex-wrap items-center space-x-20 max-md:space-x-0 max-md:p-5 mt-[100px] ">
          <img className="w-[393px] h-[393px]" src={img2} alt="" />
          <div className="w-[40%] max-md:w-full max-md:mt-5">
            <h1 className="text-3xl max-md:text-center">
              Introducing the AI-Powered Text to <br /> Image Generator
            </h1>
            <p className="my-5 w-[95%] max-md:text-center max-md:w-full">
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly.
            </p>
            <p className="w-[95%] max-md:text-center max-md:w-full">
              Simply type in a text prompt, and our cutting-edge AI will
              generate high-quality images in seconds. From product visuals to
              character designs and portraits, even concepts that don’t yet
              exist can be visualized effortlessly. Powered by advanced AI
              technology, the creative possibilities are limitless!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Infor;
