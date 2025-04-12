import React from "react";

const Button = ({ icon, text }) => {
  return (
    <button
      aria-label={text}
      className=" px-13 py-3 bg-black text-white rounded-md flex items-center gap-2 min-w-[220px] text-base justify-center cursor-pointer"
    >
      {icon} {text}
    </button>
  );
};

export default Button;
