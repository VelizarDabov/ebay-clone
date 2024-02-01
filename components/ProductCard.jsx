import React from "react";

const ProductCard = ({
  productName,
  productImage,
  productDescription,
  productPrice,
}) => {
  return (
    <div className="flex border p-12 bg-gray-200/50 ml-3 rounded-md cursor-pointer hover:bg-gray-200">
      <div
        className="flex flex-col items-center justify-center "
        key={productName}
      >
        <img
          height={100}
          width={100}
          src={productImage}
          alt="image"
          className="rounded-lg "
        />
        <div className="flex mt-3 border-b border-gray-300 w-full">
          <h1 className="text-black font-bold">{productName}</h1>
        </div>

        <p className="flex mt-1 ">{productDescription}</p>
        <p className="mt-5 mr-10 text-black font-bold">{productPrice}</p>
      </div>
    </div>
  );
};

export default ProductCard;
