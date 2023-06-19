import React from "react";
import { Link } from "react-router-dom";


export default function ErrorPage() {

  return (
    <div id="error-page" className="bg-slate-800 h-screen w-screen m-0 p-0 flex justify-center align-middle">
        <div className=" relative pt-auto text-center m-auto text-3xl font-bold flex justify-center ">
            <img className="w-100% h-auto" src={require('../images/error404.jpg')} />
            <div className="truncate absolute m-0 p-5 border-4 bg-opacity-60 bg-slate-900  text-white border-slate-100 top-2/3 left-1/2  -translate-x-1/2 -translate-y-1/2">
                <h1 className="m-0 text-4xl">Oops!</h1>
                <div className="m-0 text-xl">
                    Sorry, an unexpected error has occurred.<br/>
                    Maybe you put the wrong URL?
                </div>
                <div className="text-2xl mb-1 mt-8 border-slate-500 border-2 bg-slate-600 hover:bg-slate-500">
                    <Link to={"/"}>Go back to homepage</Link>   
                </div>
            </div>
        </div>
        
    </div>
  );
}