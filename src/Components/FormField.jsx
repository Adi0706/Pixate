import React from 'react';

function FormField({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700">
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-md mr-2 focus:outline-none focus:bg-gray-300"
          >
            Random Prompt
          </button>
        )}
        {LabelName}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="appearance-none border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

export default FormField;
