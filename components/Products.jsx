import React from "react";
import ProductCard from "./ProductCard";
import { data } from "@/data";

const Products = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data
          ? data.map((product) => (
              <div
                key={product.id}
                className="hover:scale-105 transition-all duration-150 ease-out"
              >
                <ProductCard
                  key={product.id}
                  productName={product.productName}
                  productImage={product.productImage}
                  productDescription={product.productDescription}
                  productPrice={product.productPrice}
                />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default Products;
