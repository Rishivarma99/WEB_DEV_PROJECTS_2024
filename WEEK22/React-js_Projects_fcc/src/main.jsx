import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AccordionApp from "./components/1_accordion/AccordionApp.jsx";
import RandomColorGenerator from "./components/2_color_generator/RandomColorGenerator.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/accordion",
    element: <AccordionApp></AccordionApp>,
  },
  {
    path: "/colorGenerator",
    element: <RandomColorGenerator></RandomColorGenerator>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
