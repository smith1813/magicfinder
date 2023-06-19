import React from "react";
import { Link } from "react-router-dom";


export default function ErrorPage() {

  return (
    <div id="error-page" className="
        bg-slate-800 
        h-screen w-screen 
        overflow-auto 
        m-0 p-0 
        flex justify-center ">
        
        <div name="error_container" className="relative h-2/3 pt-auto m-auto flex justify-center object-scale-down h-auto ">
            
            <img name="error_image_container" 
                className="" src={require('../images/error404.jpg')} />
            
            <div name="error_mesage_container" 
                className="truncate text-center font-bold absolute m-0 p-5 border-4 
                bg-opacity-60 bg-slate-900  text-white border-slate-100 
                top-2/3 left-1/2  -translate-x-1/2 -translate-y-1/2 ">
                
                <div className="m-0 mb-1 text-4xl">Oops!</div>
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