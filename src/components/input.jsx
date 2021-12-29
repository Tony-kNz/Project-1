import React from "react";

const Input = ({ name, value, type, label, onChange }) => {
  return (
    <div className="mb-10">
      <label
        for={name}
        className="block text-lg font-medium text-gray-700 mb-3"
      >
        {label}
      </label>
      <input
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        className="
                mt-1
                ring-1
                ring-gray-400
                h-10
                focus:border-gray-500
                focus:ring-gray-600
                focus:outline-none
                focus:ring-2
                block
                w-full
                shadow-sm
                sm:text-sm
                border-gray-300
                rounded-sm
                px-2
              "
      />
    </div>
  );
};

export default Input;
