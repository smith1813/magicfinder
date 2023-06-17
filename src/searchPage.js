import React from "react";
import { CardList } from "./cardList";

export default function  SearchPage({cardList}){
    return (
        <React.Fragment>
            <div name="search-result" className="flex px-5 m-5 justify-center ">
                {cardList && <CardList cardList={cardList}/>}
            </div>
        </React.Fragment>
    )
}
