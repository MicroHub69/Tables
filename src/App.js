import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/table.css";
// import UtilityTable from "./Pages/admin/utility/Utility";
// import TransactionTable from "./Pages/transaction/TransactionData";
// import ResidenceTable from "./Pages/admin/Residence/ResidenceTable";
// import ActivityTable from "./Pages/admin/activityLog/ActivityTable";
// import TransactionTable from "./Pages/admin/transaction/TransactionData";
// import TransactionResidence from "./Pages/Residence_tables/trasactionResidence/TrasactionResidence";
// import ResidenceTablesInResidence from "./Pages/Residence_tables/residenceResidence/ResidenceTablesInResidence";
// import ResidenceTable from "./Pages/Residence/ResidenceTable";
// import LandingPage from "./Pages/Test";
// import ActivityResidence from "./Pages/Residence_tables/activityResidence/ActivityResidence";
// import ActivityTableExternal from "./Pages/external/ActivityTableExternal";

// Modal Tables
// import EmergencyContactTable from "./Pages/admin/emergencyContactList/EmergencyContactTable";
// import TransactionCollectModal from "./Pages/admin/transaction/TransactionCollectModal";
import ListOfPenalties from "./Pages/admin/transaction/listOfPenalties/ListOfPenalties";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<LandingPage />} /> */}
          {/* <Route index element={<ActivityResidence />} /> */}
          {/* <Route index element={<TransactionResidence />} /> */}
          {/* <Route index element={<ResidenceTablesInResidence />} /> */}
          {/* <Route index element={<UtilityTable />} /> */}
          {/* <Route index element={<ResidenceTable />} /> */}
          {/* <Route index element={<ActivityTable />} /> */}
          {/* <Route index element={<TransactionTable />} /> */}
          {/* <Route index element={<ResidenceTable />} /> */}
          {/* <Route path="/table2" element={<NewTable />} /> */}
          {/* <Route index element={<ActivityTableExternal />} /> */}

          {/* Modal Tables */}
          {/* <Route index element={<EmergencyContactTable />} /> */}
          {/* <Route index element={<TransactionCollectModal />} /> */}
          <Route index element={<ListOfPenalties />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
