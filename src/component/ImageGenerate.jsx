import React, { useState } from "react";

const ImageGenerate = () => {
  const [prompt, setPrompt] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    const response = await fetch(
      `https://image.pollinations.ai/prompt/${prompt}`
    );
    console.log(response.url);
    setImgUrl(response.url);
  };

  return (
    <>
      <div>
        <div>
          <img className="w-[300px]" src={imgUrl} alt="" />
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            type="text"
            placeholder="Describe what you want to Generate"
          />
          <button onClick={generateImage}>Generate</button>
        </div>
      </div>
    </>
  );
};

export default ImageGenerate;
