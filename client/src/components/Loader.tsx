import React from "react";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ClipLoader color="blue" size={60} />
    </div>
  );
}
