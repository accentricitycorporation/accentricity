import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import Home from "./pages/Home";
import Services from "./pages/Services";
import AppDevelopment from "./pages/AppDevelopment";
import AIAutomation from "./pages/AIAutomation";
import Work from "./pages/Work";
import WorkDetail from "./pages/WorkDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/app-development", element: <AppDevelopment /> },
      { path: "/ai-automation", element: <AIAutomation /> },
      { path: "/work", element: <Work /> },
      { path: "/work/:slug", element: <WorkDetail /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ],
  },
]);
