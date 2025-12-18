import React, { useState } from "react";
import { Loader2, Image as ImageIcon } from "lucide-react";

const ImageGenerate = () => {
  const [prompt, setPrompt] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImgUrl(""); // Clear previous image while loading

    try {
      const response = await fetch(
        `https://image.pollinations.ai/prompt/${prompt}`
      );
      setImgUrl(response.url);
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-transparent p-4">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden border border-white/20 p-6 flex flex-col gap-6">
        <div className="w-full h-[400px] aspect-square bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden relative shadow-inner border border-gray-200 group transition-all">
          {loading ? (
            <div className="flex flex-col items-center gap-3 animate-pulse">
              <Loader2 className="w-10 h-10 text-purple-600 animate-spin" />
              <span className="text-sm text-gray-500 font-medium">Creating magic...</span>
            </div>
          ) : imgUrl ? (
            <img
              className="w-full h-full object-cover shadow-sm transition-transform duration-500 hover:scale-105"
              src={imgUrl}
              alt="Generated Art"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-gray-400">
              <ImageIcon className="w-12 h-12 opacity-50" />
              <span className="text-sm">Image will appear here</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.currentTarget.value)}
            placeholder="Describe what you want to generate..."
            className="w-full text-black px-4 py-3 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all resize-none h-24 text-sm"
          />

          <button
            onClick={generateImage}
            disabled={loading || !prompt.trim()}
            className="w-full bg-black hover:bg-gray-900 text-white font-medium py-3 rounded-xl transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Art"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerate;
