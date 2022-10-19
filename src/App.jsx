import { useState } from "react";
import { colorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar  from "./scenes/global/Sidebar";
import { Router, Routes, Route } from 'react-router-dom'
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calender from "./scenes/calender";



function App() {
  const [theme, colorMode] = useMode();

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <main className="content">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/team' element={<Team />} />
              <Route path='/invoices' element={<Invoices />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/bar' element={<Bar />} />
              <Route path='/form' element={<Form />} />
              <Route path='/pie' element={<Pie />} />
              <Route path='/faq' element={<FAQ />} />
              <Route path='/geography' element={<Geography />} />
              <Route path='/calender' element={<Calender />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
