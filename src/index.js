import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./output.css"
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Setlist from "./pages/SetList";
import LandingPage from "./pages/LandingPage"
import CardDetails from "./pages/CardDetails";
import { NavLink } from "react-router-dom"



export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavLinkBar/>
        <Routes>
            <Route index element={<LandingPage />}/>
            <Route path="search"  element={<SearchPage />} />
            <Route path="setlist" element={<Setlist />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="card/:cardId" element={<CardDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

function NavLinkBar(){

  const navLinkStyles = ( {isActive} ) => {
      return({
          fontWeight: isActive ? 'bold' : 'normal',
          textDecoration: isActive ? 'none' : 'underline',
          padding: 5,
          fontSize: '1.15rem',
      }        )
  }
  return(
      <nav className="bg-slate-800 text-slate-200">
          <NavLink style={navLinkStyles} to="/search">Search</NavLink>
          <NavLink style={navLinkStyles} to="/setlist">Setlist</NavLink>
      </nav>            
  )
}


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);