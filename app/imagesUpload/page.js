"use client";

import { useState, useEffect } from "react";
import { storage } from "@/utils/firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

const page = () => {
  const [images, setImages] = useState([]);
  const [imageLinks, setImageLinks] = useState([]);
  const imageListsRef = ref(storage, "posters/");
  console.log(images);

  const handleImageUpload = (e) => {
    e.preventDefault();
  
    const uploadPromises = [...images].map(image => {
      const imageRef = ref(storage, `posters/${image.name + v4()}`);
      uploadBytes(imageRef, image);
    });
  };
  console.log(imageLinks);


  useEffect(() => {
    try {
      listAll(imageListsRef).then((response) => {
        const promises = response.items.map((item) => getDownloadURL(item));
        Promise.all(promises).then((urls) => {
          setImageLinks(urls);
        });
      });
    } catch (error) {
      console.log(error);
    }
    
  }, []);


  return (
    <div>
      <div className="flex flex-col px-3 md:px-10 lg:px-10 xl:px-36 pt-32 items-center justify-center p-12 bg-white rounded-md shadow-md">
        <form
          className="mt-4 space-y-6 flex flex-col justify-center items-center"
          onSubmit={handleImageUpload}
        >
          <h1 className="font-semibold text-2xl">Upload images</h1>
          <input
            className="file:p-3 file:bg-blue-600 file:rounded-md file:shadow-md file:text-white file:border-none file:cursor-pointer"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setImages(e.target.files)}
          />
          <button
            type="submit"
            className="px-3 py-2 bg-green-700 text-white font-semibold rounded-sm mt-4"
          >
            Upload
          </button>
        </form>
      </div>

      <div className="grid w-full grid-cols-2 px-6 gap-4 relative my-4">
        
        {imageLinks.map((url) => (
          <div className="card w-full relative shadow-md border-gray-400">
            <img className="w-full h-full object-cover" src={url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
