import React from "react";
import InputPage from "./InputPage";
import TablePage from "./TablePage";
// import { useSelector } from "react-redux";

const LandingPage = () => {
// let {post}=useSelector((state)=>state.post)
// console.log(post);
  return (
    <div>
    <InputPage />

    <TablePage />
    </div>
  );
};

export default LandingPage;
