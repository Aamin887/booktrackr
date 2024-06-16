import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { action as homeAction } from "./routes/index/Index.jsx";
import data from "./hooks/data.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Root, Index, Add, Details } from "./routes";
import { Error } from "./pages/";

// loaders and acctions
import { loader as indexLoader } from "./routes/index/Index.jsx";
import { loader as detailsLoader } from "./routes/details/Details.jsx";
import { loader as appLoader } from "./App.jsx";

import { loader as addLoader, action as addAction } from "./routes/add/Add.jsx";
import App from "./App.jsx";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: indexLoader,
        action: homeAction,
        element: <Index />,
      },
      {
        path: "/books",
        element: <App />,
        loader: appLoader,
      },
      {
        path: "/add",
        element: <Add />,
        loader: addLoader,
        action: addAction,
      },
      {
        path: "/:bookId",
        element: <Details />,
        loader: detailsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={root} />
    <ToastContainer />
  </React.StrictMode>
);

// navbar

// home page
// form to add a book page
// view book details page, edit through this page, delete, upvote here
