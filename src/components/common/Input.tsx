import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = "", ...props }) => {
  return (
    <input
      className={`
        w-full px-5 py-4 rounded-xl 
         border border-white 
        text-white placeholder-white 
        focus:outline-none focus:bg-white/10 focus:border-white 
        transition-all duration-200 backdrop-blur-md shadow-sm
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;