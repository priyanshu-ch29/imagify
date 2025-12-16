import React from "react";

const Heading = ({ title, para }) => {
  return (
    <>
      <div className="text-center my-8">
        <h1 className="text-4xl">{title}</h1>
        <p className="mt-3">{para}</p>
      </div>
    </>
  );
};

export default Heading;
