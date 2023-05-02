import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addPosts, upddatPost } from "../reduxToolkit/BookSlice/PostsSlice";

const InputPage = () => {
  let { id } = useParams();
  let { record } = useSelector((state) => state.post);
  let sselectedElement=record.filter(ele=>ele.id=== +id);
  let element=sselectedElement[0]
  console.log("sselectedElement",element)
  // let [title, setTitle] = useState("");
  // let [auther, setauther] = useState("");
  // let [age, setAge] = useState("");
  let dispatch = useDispatch();
  let navigate=useNavigate()

  let [formInputs, setFormInputs] = useState(id?{
    id:element?.id,
    title: element?.title,   
    auther: element?.auther,  
    age: element?.age,
  }:{
    title: "",
    auther: "",
    age: "",
  });

  let formInputsHandeler = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };


  let formHandeler = (e) => {
    e.preventDefault();
    console.log("formInputs", formInputs);
    dispatch(addPosts(formInputs));
    setFormInputs({
      title: "",
      auther: "",
      age: "",
    });
    navigate("/")
  };
  let formHandelerUppdate = (e) => {
    e.preventDefault();
    console.log("formInputs", formInputs);
    dispatch(upddatPost(formInputs));
    setFormInputs({
      title: "",
      auther: "",
      age: "",
    });
    navigate("/")
  };
  return (
    <div>
      {id ? (
        <form className="w-10/12 mx-auto p-5 border" onSubmit={formHandelerUppdate}>
          <h1 className="text-center text-3xl mb-3">Input Field</h1>

          <input
            type="text"
            className="px-3 py-2 border w-full mb-3"
            placeholder="Enter The Book Title .. .."
            name="title"
            value={formInputs.title}
            onChange={formInputsHandeler}
          />
          <input
            type="text"
            className="px-3 py-2 border w-full mb-3"
            placeholder="Enter The Book Auther .. .."
            name="auther"
            value={formInputs.auther}
            onChange={formInputsHandeler}
          />
          <input
            type="text"
            className="px-3 py-2 border w-full mb-3"
            placeholder="Enter The Book age .. .."
            name="age"
            value={formInputs.age}
            onChange={formInputsHandeler}
          />
          <button className="py-2 px-4 rounded bg-emerald-950 text-white ">
            Update
          </button>
          <h1>{id}</h1>
        </form>
      ) : (
        <form className="w-10/12 mx-auto p-5 border" onSubmit={formHandeler}>
          <h1 className="text-center text-3xl mb-3">Input Field</h1>

          <input
            type="text"
            className="px-3 py-2 border w-full mb-3"
            placeholder="Enter The Book Title .. .."
            name="title"
            value={formInputs.title}
            onChange={formInputsHandeler}
          />
          <input
            type="text"
            className="px-3 py-2 border w-full mb-3"
            placeholder="Enter The Book Auther .. .."
            name="auther"
            value={formInputs.auther}
            onChange={formInputsHandeler}
          />
          <input
            type="text"
            className="px-3 py-2 border w-full mb-3"
            placeholder="Enter The Book age .. .."
            name="age"
            value={formInputs.age}
            onChange={formInputsHandeler}
          />
          <button className="py-2 px-4 rounded bg-emerald-950 text-white ">
            ADD
          </button>
        </form>
      )}
    </div>
  );
};

export default InputPage;
