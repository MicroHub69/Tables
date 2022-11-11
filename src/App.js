import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/table.css";
// import ActivityTable from "./Pages/activityLog/ActivityTable";
// import UtilityTable from "./Pages/utility/Utility";
// import TransactionTable from "./Pages/transaction/TransactionData";
import ResidenceTable from "./Pages/Residence/ResidenceTable";
// import LandingPage from "./Pages/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<LandingPage />} /> */}
          {/* <Route index element={<ActivityTable />} /> */}
          {/* <Route index element={<UtilityTable />} /> */}
          {/* <Route index element={<TransactionTable />} /> */}
          <Route index element={<ResidenceTable />} />
          {/* <Route path="/table2" element={<NewTable />} /> */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
