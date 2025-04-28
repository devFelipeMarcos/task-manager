import React from 'react'

const Input = ({ value, onChange, type, placeholder }) => (
  <input
    className="w-full border border-gray-300 outline-none px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400 transition"
    value={value}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
  />
)

export default Input
