"use client";
import Header from "@/components/Header";
import React, { useState } from "react";

const page = () => {
  const [preview, setPreview] = useState<string>();
  const [image, setImage] = useState<File>();

  const mintNft = () =>{

  }
  return (
    <div>
      <Header />

      <main className="max-w-6xl mx-auto p-10 border">
        <h1 className="text-4xl font-bold">Add an Item to the Marketplace</h1>
        <h2 className="text-xl font-semibold pt-5">Item Details</h2>
        <p className="pt-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus, enim dicta quae vero porro recusandae pariatur harum
          vitae. Sed, laboriosam.
        </p>
        <div className="flex flex-col justify-center items-center md:flex-row md:space-x-5 pt-10">
          <img
            className="border h-80 w-80 object-contain"
            src="https://links.papareact.com/ucj"
            alt=""
          />
          <form onSubmit={mintNft} className="flex flex-col flex-1 p-2 space-y-2 ">
            <label className="text-black ">Name of Item</label>
            <input
            id="name"
              className="formField"
              placeholder="Name of item..."
              type="text"
            />
            <label className="">Description</label>
            <input
            id="description"
              className="formField"
              type="text"
              placeholder="Enter Description..."
            />
            <label className="mb-10">Image of Item</label>
            <input
              type="file"
              onChange={(e) => {
                if (e.target.files?.[0]) {
                  setPreview(URL.createObjectURL(e.target.files[0]));
                  setImage(e.target.files[0]);
                }
              }}
            />
            <button
              className="bg-blue-600 font-bold text-white rounded-full py-4 px-10 w-56  mx-auto mt-5  md:mt-auto md:ml-auto"
              type="submit"
            >
              Add/Mint Item
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default page;
