// ProductForm.js
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CiEdit } from "react-icons/ci";

const ProductForm = ({ onSubmit, initialProduct }) => {
  const fileRef = useRef(null);

  const [product, setProduct] = useState(initialProduct || {});
  const [file, setFile] = useState(undefined);
  const [fileUploadPercentage, setFileUploadPercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (product._id) {
        await axios.put(`/api/products/${product._id}`, product);
      } else {
        await axios.post("/api/products", product);
      }
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting product:", error);
    }
  };

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;

    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        setFileUploadPercentage(progress);
      },
      (error) => {
        console.error("Upload error:", error);
        setFileUploadError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setProduct({ ...product, avatar: downloadURL });
        });
        console.log("Upload complete");
      }
    );
  };

  return (
    <div className="flex justify-center flex-col max-w-4xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-4 p-10 ">
          <img
            onClick={() => fileRef.current.click()}
            src={product.avatar || ""}
            className="rounded-lg border-none h-48 w-48 object-cover cursor-pointer self-center mt-2 shadow-lg hover:opacity-50 transform transition duration-200"
          />
          <input
            type="file"
            id="editImage"
            ref={fileRef}
            className="border border-gray-400 p-3 rounded-lg mt-2"
            accept="image/*"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          {fileUploadPercentage === 100 && !fileUploadError ? (
            <p>Image Uploaded Successfully</p>
          ) : (
            ""
          )}
          {fileUploadError ? <p>Image should be less than 2 MB</p> : ""}
        </div>
        <form onSubmit={handleSubmit} className="mt-4 p-10 ">
          <label className="block mb-2 text-sm font-bold">Name</label>
          <input
            type="text"
            name="name"
            value={product.name || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2 text-sm font-bold">
            Description
          </label>
          <textarea
            name="description"
            value={product.description || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2 text-sm font-bold">Price</label>
          <input
            type="number"
            name="price"
            value={product.price || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <label className="block mt-4 mb-2 text-sm font-bold">Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock || ""}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white p-2 rounded">
            Save
          </button>
        </form>
      </div>
      {formSubmitted ? (
        <p className="text-green-600 text-center">
          Form Submitted Successfully
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductForm;
