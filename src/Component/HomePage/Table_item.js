import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePosts } from "../reduxToolkit/BookSlice/PostsSlice";

const TableItem = ({ record }) => {
  let dispatch = useDispatch();
  let deleteHandeler = useCallback((id) => {
    dispatch(deletePosts(id));
  }, []);
  // let deleteHandeler = (id) => {
  //   console.log("id",id)
  //   dispatch(deletePosts(id));
  // }
  let updatHandeler = (val)=>{
console.log("val",val)
  };
  let viewHandeler = ()=>{
console.log("viewHandeler")
  };

  return (
    <>
      {record.map((post) => (
        <tr key={post.id}>
          <td className="border">{post.id}</td>
          <td className="border">{post.title}</td>
          <td className="border">
            <div className="text-center">
              <Link
                to={`${post.id}/edite`}
                className="px-3 py-1 rounded m-1 border bg-red-800 text-white"
                onClick={() => updatHandeler(post.id)}
              >
                Edite
              </Link>
              <Link
                to={`${post.id}/view`}
                className="px-3 py-1 rounded m-1 border bg-green-500 text-white"
                onClick={() => viewHandeler(post.id)}
              >
                View
              </Link>
              <button
                className="px-3 py-1 rounded m-1 border bg-blue-800 text-white"
                onClick={() => deleteHandeler(post.id)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableItem;
