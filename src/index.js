import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./output.css"
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./layout/footer";
import NavLinkBar from "./layout/navLinkBar";
import Setlist from "./pages/SetList";
import LandingPage from "./pages/LandingPage"
import CardDetails from "./pages/CardDetails";

//<Route index element={<LandingPage />}/>

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavLinkBar/>
        <Routes>
            <Route index  element={<SearchPage />} />
            <Route path="setlist" element={<Setlist />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="card/:cardId" element={<CardDetails />}></Route>
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