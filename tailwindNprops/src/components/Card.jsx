import React from "react";
import Cover from '../img/cover.png'

const Card = ({user = "Shubh" , no = "No 0", year = "2025", img = Cover}) => { // We can use props or for better code we can use destructring to get our props
                            // props, user = "Shubh" is the default value of user if we don't pass any value
  return (
    <>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src={img}
          />
        </div>
        <div className="flex items-center flex-col md:items-start">
          <span className="text-2xl font-medium">Class Warfare</span>
          <span className="font-medium text-sky-500">
            {/* {props.user}  */}
            {/* If we are using props then we can use that */}
            {/* {props.user || "Shubh"} */}
            {/* If we do not get any value then we can use default value */}
            {user}
            </span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>{no}</span>
            <span>·</span>
            <span>{year}</span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
