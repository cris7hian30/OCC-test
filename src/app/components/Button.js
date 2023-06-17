import React from 'react';

export const Button = (props) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      {...props}
    />
  );
};
