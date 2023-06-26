import React from "react";
import { CardList } from "./cardList";



// if there is no cardlist, it should show an emptySearch page
export default function  SearchArea({cardList}){
    return (
        <React.Fragment>
            <div name="seach-area-container" className="bg-slate-200 h-screen w-screen">
                {cardList ? <CardList cardList={cardList}/> : <EmptySearchArea/> }
            </div>  
        </React.Fragment>
    )
}

// if there is no cardlist, it should show a no results page
function  EmptySearchArea(){
    return (
        <React.Fragment>
            <div name="empty-seach-container" 
            className="flex flex-col justify-center h-2/3 w-full">
                <div name="empty-search-message-box" 
                    className="m-auto  w-3/5 h-1/4
                    flex flex-col justify-center">
                        <div className=" text-center md:text-3xl text-lg font-semibold text-slate-800">
                            Please, search for a Magic the Gathering card name!
                        </div>
                </div>
                
            </div>  
        </React.Fragment>
    )
}

