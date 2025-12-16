import { imagesData } from "@/utils/constant";
import React from "react";

const Images = () => {
  return (
    <>
      <div className="flex justify-center space-x-2 flex-wrap gap-y-2">
        {imagesData.map((img) => {
          return <img key={img.id} src={img.imageName} alt="" />;
        })}
      </div>
      <p className="text-center mt-2">Generated images from imagify</p>
    </>
  );
};

export default Images;
