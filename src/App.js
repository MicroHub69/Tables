import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/table.css";
<<<<<<< HEAD
// import ActivityTable from "./Pages/activityLog/ActivityTable";
// import UtilityTable from "./Pages/utility/Utility";
// import TransactionTable from "./Pages/transaction/TransactionData";
import ResidenceTable from "./Pages/Residence/ResidenceTable";
=======
import ActivityTable from "./Pages/activityLog/ActivityTable";
// import TransactionTable from "./Pages/transaction/TransactionData";
// import ResidenceTable from "./Pages/Residence/ResidenceTable";
>>>>>>> 8f7310c75b08a40472741231aec99888be70c476
// import LandingPage from "./Pages/Test";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<LandingPage />} /> */}
<<<<<<< HEAD
          {/* <Route index element={<ActivityTable />} /> */}
          {/* <Route index element={<UtilityTable />} /> */}
          {/* <Route index element={<TransactionTable />} /> */}
          <Route index element={<ResidenceTable />} />
=======
          <Route index element={<ActivityTable />} />
          {/* <Route index element={<TransactionTable />} /> */}
          {/* <Route index element={<ResidenceTable />} /> */}
>>>>>>> 8f7310c75b08a40472741231aec99888be70c476
          {/* <Route path="/table2" element={<NewTable />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
