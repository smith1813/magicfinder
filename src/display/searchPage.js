import React from "react";
import { CardList } from "./cardList";

export default function  SearchArea({cardList}){
    return (
        <React.Fragment>
            <div name="seach-area" className="bg-slate-200 h-full w-full">
                {cardList && <CardList cardList={cardList}/>}
            </div>  
        </React.Fragment>
    )
}
