import React from "react";

export default function TextArea({ name, type, placeholder }) {
  return (
    <textarea
     className="border-2 border-gray-300 p-1 mb-1 rounded" 
     rows="3"
     type={type} name={name} placeholder={placeholder}></textarea>
  );
}
