import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/table.css";
import LandingPage from "./Pages/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          {/* <Route path="/table2" element={<NewTable />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
