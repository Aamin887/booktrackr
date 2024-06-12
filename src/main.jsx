import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { action as homeAction } from "./routes/index/Index.jsx";
import data from "./hooks/data.js";

import { Root, Index } from "./routes";
import { Error } from "./pages/";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: data,
        action: homeAction,
        element: <Index />,
      },
      {
        path: "/books",
        element: (
          <div>
            <h1>HOme</h1>
          </div>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={root} />
  </React.StrictMode>
);

// navbar

// home page
// form to add a book page
// view book details page, edit through this page, delete, upvote here
