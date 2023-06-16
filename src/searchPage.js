import React, { useState } from "react";
import { CardList } from "./cardList";

export default function  SearchPage({cardList}){
    
    return (
        <React.Fragment>
            {cardList && <CardList cardList={cardList}/>}
        </React.Fragment>
    )
}
