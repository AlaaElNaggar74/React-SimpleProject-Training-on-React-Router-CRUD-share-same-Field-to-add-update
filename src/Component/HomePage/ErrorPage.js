import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  return (
    <div className="flex items-center justify-center bg-slate-400 text-black h-screen">
      <div>
        <h1 className="text-8xl ">Error 404 .</h1>
        <div className="text-center">
        <button
          className="m-2  rounded py-4 px-6  bg-black text-white  mt-8 "
          onClick={() => navigate("/", { replace: true })}
        >
          BACK
        </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
