import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <div className="w-[20rem]  bg-slate-300 p-3 rounded">
        <img
          src={item?.imageUrl}
          alt="pictures"
          className="h-[15rem] w-full object-cover rounded"
        />
        <div className="flex justify-center items-center flex-col">
          <p className="font-extrabold text-3xl my-3 text-center">
            {item?.title}
          </p>
          <p className="font-semibold text-2xl">${item?.price}</p>
        </div>
        <button
          onClick={() => navigate(`/product/${item.title}`, { state: item })}
          className="w-full bg-blue-500 py-3 mt-5 rounded hover:bg-blue-400 duration-300"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Card;
