import React from "react";
import { RoutesEnum } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout"

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Home} element={<Layout />} />
      </Routes>
    </BrowserRouter>
  );
}
