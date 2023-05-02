import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import TableItem from "./Table_item";

const TablePage = () => {
  let { record, looding, error } = useSelector((state) => state.post);
  let dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-center text-3xl py-8">Table Body</h1>
      <div>
        {looding ? (
          <h1 className="text-center text-4xl ">"LOOD INNNNN NNNGG GGGG"</h1>
        ) : error ? (
          <h1 className="text-center text-4xl ">{error}</h1>
        ) : (
          <table className="table-auto w-10/12 mx-auto text-left">
            <thead>
              <tr>
                <th className="border w-2/12 ">#</th>
                <th className="border w-5/12">Title</th>
                <th className="border w-5/12">Option</th>
              </tr>
            </thead>
            <tbody>
            <TableItem record={record}/>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default TablePage;
