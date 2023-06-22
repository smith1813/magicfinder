import React from "react"
import { NavLink } from "react-router-dom"

export default function NavLinkBar(){

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
            <NavLink style={navLinkStyles} to="/">Search</NavLink>
            <NavLink style={navLinkStyles} to="/setlist">Setlist</NavLink>
        </nav>            
    )
}