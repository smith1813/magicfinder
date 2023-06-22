import React from "react";
import { NavLink } from "react-router-dom";

export default function NavigationBar({handleSubmit, searchPlaceholder}){
    return (
    <React.Fragment>
        
        <div className="relative flex bg-slate-800 justify-center items-center py-8"> 
            <div name="nav-logo" className="
                absolute
                invisible
                sm:visible 
                w-[40px] top-[30] 
                sm:w-[50px] 
                md:w-[60px]
                xl:w-[60px] 
                left-10">
                <img src={require('../images/SearchLogo.png')} ></img>
            </div>

            <div name="form-container" >
                <form name="search-form"  onSubmit={handleSubmit}>
                    <input className=" bg-slate-300 hover:bg-slate-200 border-1 border-slate-400 rounded-xl  rounded-r-none p-1 px-3 text-black " name="search_queue" placeholder={searchPlaceholder} />
                    <button className="bg-slate-900  hover:bg-blue-400 border-1  border-slate-400 rounded-xl rounded-l-none p-1 px-3 text-slate-300 text-center" type="submit">Search</button>
                </form>
            </div>
        </div>    
    </React.Fragment>
        
    );
}
