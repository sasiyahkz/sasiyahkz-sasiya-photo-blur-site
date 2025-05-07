import React, { useState } from "react";
import { UploadCloud, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = preview;
    link.download = "edited-photo.png";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-300 p-6 text-white">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        className="text-4xl font-bold text-center mb-8 drop-shadow-lg">
        SASIYA PHOTO EDIT
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-full max-w-md p-4 bg-white/10 backdrop-blur-md border-white/20 border-2 rounded-2xl shadow-xl">
          <div className="flex flex-col items-center">
            <label className="cursor-pointer bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-xl flex items-center gap-2">
              <UploadCloud size={20} /> Upload Photo
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
            {preview && (
              <img src={preview} alt="Preview" className="mt-4 rounded-xl shadow-md w-full" />
            )}
          </div>
        </div>

        {preview && (
          <div className="w-full max-w-md p-4 bg-white/10 backdrop-blur-md border-white/20 border-2 rounded-2xl shadow-xl">
            <div className="flex flex-col items-center">
              <button onClick={downloadImage} className="bg-yellow-500 hover:bg-yellow-600 text-white w-full rounded-xl flex items-center gap-2 justify-center px-4 py-2">
                <Download size={20} /> Download Photo
              </button>
              <p className="text-sm text-white mt-2">Note: Advanced editing effects coming soon!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
