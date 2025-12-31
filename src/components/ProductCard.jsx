import React from "react";
export default function ProductCard(){
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="h-48 bg-gray-100 mb-3" />
      <h3 className="font-semibold">Sample Product</h3>
      <p className="text-sm text-gray-500">$29.99</p>
    </div>
  );
}
