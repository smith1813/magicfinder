import React from "react";
import { CardList } from "./cardList";
import EmptySearchArea from "./emptySearchArea";



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
