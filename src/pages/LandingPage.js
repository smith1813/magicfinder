import React from "react";

export default function LandingPage() {

    return (
        <React.Fragment>
            <div name="landingpage-container"
                className="flex w-full h-screen bg-slate-800 justify-center flex-col">

                <div className>
                    <div className="w-full flex justify-center text-slate-200" >
                        <div className="mb-10 text-2xl font-semibold text-center" >
                            Please, search a card name
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