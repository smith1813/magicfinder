import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./output.css"
import SearchPage from "./pages/search/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/error404/ErrorPage";
import LandingPage from "./pages/home/LandingPage"
import CardDetails from "./pages/card/CardDetails";
import { NavLink } from "react-router-dom"



export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavLinkBar/>
        <Routes>
            <Route index element={<LandingPage />}/>
            <Route path="search"  element={<SearchPage />} />
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
          <NavLink style={navLinkStyles} to="/">Home</NavLink>
      </nav>            
  )
}


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);