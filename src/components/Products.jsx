import React from "react";
import { useNavigate } from "react-router-dom";
import data from "../data.json";
import Card from "./Card";

const Products = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center items-center mt-10 max-w-screen-xl mx-auto">
      {data.map((item, idx) => (
        <Card item={item} />
      ))}
    </div>
  );
};

export default Products;
