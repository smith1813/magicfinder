import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./output.css"
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/errorpage";
import Footer from "./layout/footer";
import NavLinkBar from "./layout/navLinkBar";
import Setlist from "./pages/setlist";


export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavLinkBar/>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/setlist" element={<Setlist />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);