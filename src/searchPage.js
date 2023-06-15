import React, { useState } from "react";
import { CardList } from "./cardList";

export default function  SearchPage({cardList}){
    
    return (
        <React.Fragment>
            {cardList && <CardList cardList={cardList}/>}
        </React.Fragment>
    )
}



function SearchBar(handleCardList){
    return (
            <InputSearchBar placeholder="Write the name of the card in here..."/>             
    );

}
function InputSearchBar({handleSearchBarChange, placeholder}){
    return(
        <div className="searchBar">
        <h1>Busca tu carta ctm</h1>
        <input 
            onChange={ handleSearchBarChange }
            placeholder={placeholder}
        />
        </div>
    );
}