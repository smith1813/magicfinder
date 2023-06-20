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
        
        <div name="error_container" 
            className="
            relative pt-auto m-10 
            flex justify-center">
            
            <img name="error_image_container" 
                className="self-center" src={require('../images/error404.jpg')} />
            
            <div name="error_mesage_container" 
                className=" 
                absolute 
                flex justify-center
                font-bold  text-white text-center
                m-0 p-5 border-4 
                bg-opacity-60 bg-slate-900 border-slate-100 
                top-1/2 -translate-y-1/2 
                xs:top-1/2    xs:-translate-y-1/2
                sm:top-1/2  sm:-translate-y-1/2
                md:top-2/3 md:-translate-y-2/3
                left-1/2  -translate-x-1/2 
                w-1/2 h-auto">
                
                <div name="text-container " 
                     className=" whitespace-nowrap">
                    
                    <div className="
                        m-0 mb-1 
                        text-[2vw] 
                        " >Oops!</div>
                    <div className="  
                        text-[1.5vw] ">
                        Sorry, an unexpected error has occurred. <br/>
                        Maybe you put the wrong URL?
                    </div>
                    <div className=" 
                        text-[1.5vw]  
                        mb-1 mt-3 
                        border-slate-500 border-2 bg-slate-600 
                        hover:bg-slate-500 w-auto">
                    <Link className="" to={"/"}>Go back to homepage</Link>   
                    </div>

                </div>
            </div>
        </div>
        
    </div>
  );
}