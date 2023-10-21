import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./assets/components/Home/Home.jsx";
import About from "./assets/components/About/About.jsx";
import User from "./assets/components/User/User.jsx";
import Github, { gitHubInfoLoader } from "./assets/components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        // loader used to make direct api call (optimize)
        loader={gitHubInfoLoader}
        path="github"
        element={<Github />}
      />
      <Route path="user/:userid" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
