import React from "react";

export default function LandingPage() {

    return (
        <React.Fragment>
            <div name="landingpage-background"
                className="flex w-full h-screen bg-slate-800 justify-center flex-col">

                <div name="instructions-wrapper" className="mb-[25%]">
                    <div className="w-full flex flex-col justify-center text-slate-200" >
                        <div className="mb-10  m-auto px-10 text-center text-2xl   " >
                            <p>Please, search for a <strong className="whitespace-nowrap">Magic: the Gathering</strong>  card name</p>
                        </div>
                    </div>
                    <form  action="/search" name="search-form" className="m-auto flex flex-row w-2/3"  >
                        <input name="q"
                            className="
                            bg-slate-300 hover:bg-slate-200 
                            border-1 border-slate-400 rounded-xl  
                            rounded-r-none p-1 px-3 text-black h-14 w-full
                            font-semibold text-xl"
                            
                            placeholder={'search a card name'} />
                        <button
                            className="bg-slate-900  hover:bg-blue-400 border-1  border-slate-400 
                        rounded-xl rounded-l-none p-1 px-3 text-slate-300 text-center object
                        h-14 w-20"
                            type="submit">
                            <img className="max-w-12 max-h-12 " src={require('../images/SearchLogo.png')}></img>
                        </button>
                    </form>


                </div>



            </div>
        </React.Fragment>
    )
}