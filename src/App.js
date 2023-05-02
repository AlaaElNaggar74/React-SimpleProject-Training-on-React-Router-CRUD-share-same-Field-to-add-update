import "./App.css";
import HomePage from "./Component/HomePage/HomePage";

import { useSelector, useDispatch } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InputPage from "./Component/HomePage/InputPage";
import TablePage from "./Component/HomePage/TablePage";
import LandingPage from "./Component/HomePage/LandingPage";
import ErrorPage from "./Component/HomePage/ErrorPage";
import Detailse from "./Component/HomePage/Detailse";
import { useEffect } from "react";
import { getPosts } from "./Component/reduxToolkit/BookSlice/PostsSlice";

let routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "input",
        element: (
          <>
            <InputPage />
          </>
        ),
      },
      {
        path: "table",
        element: (
          <>
            <TablePage />
          </>
        ),
      },
      {
        path: ":id/view",
        element: (
          <>
            <Detailse />
          </>
        ),
      },
      {
        path: ":id/edite",
        element: (
          <>
            <InputPage />
          </>
        ),
      },
    ],
  },
  {
    path: "table/:id/edite",
    element: (
      <>
        <HomePage /> <InputPage />
      </>
    ),
  },
]);

function App() {
  let { record } = useSelector((state) => state.post);
  let dispatch = useDispatch();
  console.log(record);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  // console.log(record);
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
