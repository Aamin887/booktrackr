import "./index.css";
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { action as homeAction } from "./routes/index/Index.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import { Root, Details, Add } from "./routes";
import { Error } from "./pages/";

const Index = lazy(() => import("./routes/index/Index.jsx"));
const Add = lazy(() => import("./routes/add/Add.jsx"));
const Root = lazy(() => import("./routes/root.jsx"));
const Details = lazy(() => import("./routes/details/Details.jsx"));

// loaders and acctions
import { loader as indexLoader } from "./routes/index/Index.jsx";
import { loader as detailsLoader } from "./routes/details/Details.jsx";
import { loader as appLoader } from "./App.jsx";

import { loader as addLoader, action as addAction } from "./routes/add/Add.jsx";
import App from "./App.jsx";
import { Spinner } from "./components/index.js";

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
        element: (
          <Suspense fallback={<Spinner />}>
            <Index />
          </Suspense>
        ),
      },
      {
        path: "/books",
        element: (
          <Suspense fallback={<Spinner />}>
            <App />
          </Suspense>
        ),
        loader: appLoader,
      },
      {
        path: "/add",
        element: (
          <Suspense fallback={<Spinner />}>
            <Add />
          </Suspense>
        ),
        loader: addLoader,
        action: addAction,
      },
      {
        path: "/:bookId",
        element: (
          <Suspense fallback={<Spinner />}>
            <Details />
          </Suspense>
        ),
        loader: detailsLoader,
      },
      {},
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
