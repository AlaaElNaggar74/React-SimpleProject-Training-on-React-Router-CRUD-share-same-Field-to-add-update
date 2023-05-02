import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Detailse = () => {
  let { id } = useParams();
  let { record } = useSelector((state) => state.post);
  console.log("record", record);
  console.log("ViewIDDD", id);
  return (
    <div className="flex items-center justify-center">
      <div className="w-6/12  rounded bg-slate-300 p-5">
        {record
          .filter((ele) => ele.id === +id)
          .map((ele) => (
            <div key={ele.id} className="mb-5">
              <h1 className="text-3xl mb-3">
                PostID: <span className="text-red-500">{ele.id}</span>
              </h1>
              <h1 className="text-3xl">
                PostTitle: <span className="text-red-500">{ele.title}</span>
              </h1>
              <h1 className="text-3xl">
                PostAuther: <span className="text-red-500">{ele.auther}</span>
              </h1>
              <h1 className="text-3xl">
                PostUserLogin: <span className="text-red-500">{ele.user}</span>
              </h1>
              <h1 className="text-3xl">
                PostAge: <span className="text-red-500">{ele.age}</span>
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Detailse;
