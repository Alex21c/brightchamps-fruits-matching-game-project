import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Intro from "./screens/Intro/Intro";
import NotFound from "./screens/NotFound/NotFound";
import Instruction from "./screens/Instruction/Instruction";
import Activity from "./screens/Activity/Activity";
import Rewards from "./screens/Rewards/Rewards";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
    errorElement: <NotFound />,
  },
  {
    path: "/instruction",
    element: <Instruction />,
    errorElement: <NotFound />,
  },
  {
    path: "/activity",
    element: <Activity />,
    errorElement: <NotFound />,
  },
  {
    path: "/rewards",
    element: <Rewards />,
    errorElement: <NotFound />,
  },
]);

root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//
