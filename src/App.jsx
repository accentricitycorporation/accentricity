import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}
