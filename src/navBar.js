import React from "react";

export default function NavigationBar({handleSubmit, searchPlaceholder}){
    return (
        <div name="form-container" className="flex bg-slate-800 justify-center items-center py-10">
          <form name="search-form"  onSubmit={handleSubmit}>
              <input className=" bg-slate-300 hover:bg-slate-200 border-1 border-slate-400 rounded-xl  rounded-r-none p-1 px-3 text-black " name="search_queue" placeholder={searchPlaceholder} />
              <button className="bg-slate-900  hover:bg-blue-400 border-1  border-slate-400 rounded-xl rounded-l-none p-1 px-3 text-slate-300 text-center" type="submit">Search</button>
          </form>
        </div>
    );
}