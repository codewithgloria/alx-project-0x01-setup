import React from 'react';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="border px-3 py-1 text-lg mt-3 bg-blue-500 text-white rounded-full">
      {title}
    </button>
  );
};

export default Button;